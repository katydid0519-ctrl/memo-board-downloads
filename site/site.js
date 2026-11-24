const preview = document.querySelector('#preview');
const controls = document.querySelector('.theme-controls');
controls.hidden = false;
let requestedTheme = 'postit';
for (const button of controls.querySelectorAll('button')) {
  button.addEventListener('click', async () => {
    requestedTheme = button.dataset.theme;
    const theme = requestedTheme;
    const image = new Image();
    image.src = 'media/' + theme + '.webp';
    try { await image.decode(); } catch { return; }
    if (requestedTheme !== theme) return;
    preview.src = image.src;
    for (const choice of controls.querySelectorAll('button')) {
      choice.setAttribute('aria-pressed', String(choice === button));
    }
    preview.alt = button.textContent + ' 테마 보드에 놓인 오늘 할 일 체크리스트와 주말 산책 메모';
    document.querySelector('#preview-label').textContent = button.textContent;
  });
}

const platform = navigator.userAgentData?.platform || navigator.platform || '';
const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const packageId = !mobile && (/Win/i.test(platform) ? 'windows' : /Linux x86_64/i.test(navigator.platform) ? 'linux' : null);
if (packageId) {
  const recommended = document.getElementById(packageId);
  const primary = document.querySelector('#primary-download');
  primary.href = recommended.href;
  primary.querySelector('span').textContent = (packageId === 'windows' ? 'Windows x64' : 'Linux x64') + ' 다운로드';
}
