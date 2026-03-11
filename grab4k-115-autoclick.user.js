// ==UserScript==
// @name         Grab4K 115网盘单资源自动点击 (稳健点击版)
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  只识别 115网盘链接区域（不扫描磁力链接区域）；若仅有单行资源则模拟真实鼠标点击并提供强制跳转兜底。
// @author       AI助手
// @match        *://grab4k.com/*
// @match        *://www.grab4k.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=grab4k.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  if (!window.location.href.includes('/down/')) return;

  const toast = document.createElement('div');
  toast.style.cssText = [
    'position: fixed',
    'bottom: 20px',
    'right: 20px',
    'padding: 12px 18px',
    'background: rgba(0, 0, 0, 0.82)',
    'color: #fff',
    'border-radius: 8px',
    'z-index: 999999',
    'font-size: 14px',
    'pointer-events: none',
    'transition: all .25s ease',
    'box-shadow: 0 4px 10px rgba(0,0,0,.35)',
    'opacity: 1',
  ].join(';');
  toast.textContent = '🤖 Grab4K 脚本：等待页面资源渲染...';
  document.body.appendChild(toast);

  let hideTimer = null;
  function updateToast(message, color) {
    toast.textContent = message;
    toast.style.opacity = '1';
    if (color) toast.style.background = color;
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      toast.style.opacity = '0';
    }, 3200);
  }

  function dispatchMouseSequence(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + Math.max(4, Math.min(rect.width - 4, rect.width / 2));
    const y = rect.top + Math.max(4, Math.min(rect.height - 4, rect.height / 2));

    const events = ['mouseover', 'mousedown', 'mouseup', 'click'];
    for (const type of events) {
      element.dispatchEvent(
        new MouseEvent(type, {
          view: window,
          bubbles: true,
          cancelable: true,
          composed: true,
          button: 0,
          buttons: 1,
          clientX: x,
          clientY: y,
        })
      );
    }

    if (typeof element.click === 'function') {
      element.click();
    }
  }

  function getOwnText(el) {
    let text = '';
    for (const n of el.childNodes) {
      if (n.nodeType === Node.TEXT_NODE) {
        text += n.textContent || '';
      }
    }
    return text.trim();
  }

  function isVisible(el) {
    if (!el || !(el instanceof Element)) return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function findSectionHeader(keyword) {
    const visibleNodes = Array.from(document.querySelectorAll('*')).filter(isVisible);
    return (
      visibleNodes.find((el) => {
        const ownText = getOwnText(el);
        const text = (el.textContent || '').trim();
        return ownText.includes(keyword) || text.includes(keyword);
      }) || null
    );
  }

  function detectAndClickSingle115Row() {
    const allVisible = Array.from(document.querySelectorAll('*')).filter(isVisible);

    const header115 = findSectionHeader('115网盘链接');
    const magnetHeader = findSectionHeader('磁力链接');

    const otherHeaders = [];
    const rowCandidates = [];

    for (const el of allVisible) {
      const text = (el.textContent || '').trim();
      const ownText = getOwnText(el);

      if (text.includes('磁力链接')) {
        continue;
      }

      if (
        ownText.length <= 60 &&
        !ownText.includes('115') &&
        (ownText.includes('网盘链接') || ownText.includes('磁力链接'))
      ) {
        otherHeaders.push(el);
      }

      if (text.includes('点击进入下载页面') || text.includes('进入下载页面')) {
        let clickable = el;
        let p = el;
        for (let i = 0; i < 6 && p; i += 1) {
          if (p.tagName === 'A') {
            clickable = p;
            break;
          }
          if (p.getAttribute?.('role') === 'button') clickable = p;
          p = p.parentElement;
        }
        if (!rowCandidates.includes(clickable)) rowCandidates.push(clickable);
      }
    }

    if (!header115 || rowCandidates.length === 0) return 'WAITING';

    const y115 = header115.getBoundingClientRect().top + window.scrollY;
    let nextY = magnetHeader
      ? magnetHeader.getBoundingClientRect().top + window.scrollY
      : Number.POSITIVE_INFINITY;

    for (const h of otherHeaders) {
      const hy = h.getBoundingClientRect().top + window.scrollY;
      if (hy > y115 + 8 && hy < nextY) nextY = hy;
    }

    const rowsIn115 = rowCandidates.filter((row) => {
      const ry = row.getBoundingClientRect().top + window.scrollY;
      return ry > y115 && ry < nextY;
    });

    if (rowsIn115.length === 1) {
      const target = rowsIn115[0];
      updateToast('✅ 检测到 115 单行资源，正在模拟鼠标点击...', 'rgba(34, 197, 94, 0.92)');

      target.style.outline = '2px solid #ef4444';
      target.style.outlineOffset = '2px';

      const aTag = target.tagName === 'A' ? target : target.querySelector('a[href]');
      const clickable = aTag || target;
      const href = aTag?.href || clickable?.getAttribute?.('href');

      dispatchMouseSequence(clickable);

      setTimeout(() => {
        if (window.location.href.includes('/down/') && href) {
          updateToast('ℹ️ 点击可能被拦截，执行兜底跳转...', 'rgba(59, 130, 246, 0.92)');
          window.location.assign(href);
        }
      }, 900);

      return 'DONE';
    }

    if (rowsIn115.length > 1) {
      updateToast(`🛑 115 资源有 ${rowsIn115.length} 行，按规则不自动点击。`, 'rgba(249, 115, 22, 0.92)');
      return 'DONE';
    }

    return 'WAITING';
  }

  let tries = 0;
  const maxTries = 60;
  const timer = setInterval(() => {
    tries += 1;
    const status = detectAndClickSingle115Row();
    if (status === 'DONE') {
      clearInterval(timer);
      return;
    }

    if (tries >= maxTries) {
      clearInterval(timer);
      updateToast('⚠️ 检测超时，未执行点击。可手动刷新重试。', 'rgba(239, 68, 68, 0.9)');
    }
  }, 400);
})();
