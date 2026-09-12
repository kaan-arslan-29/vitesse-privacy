(() => {
  'use strict';

  // Mağaza kaydı oluştuğunda yalnız bu merkezi değeri güncelleyin. Boş veya
  // beklenen Vitesse paketine ait olmayan adres, yer tutucu düğmeleri açmaz.
  const GOOGLE_PLAY_URL = '';
  const expectedPackage = 'com.aria.vitesse';
  let parsed;
  try {
    parsed = new URL(GOOGLE_PLAY_URL);
  } catch {
    return;
  }
  if (parsed.protocol !== 'https:'
    || parsed.hostname !== 'play.google.com'
    || parsed.pathname !== '/store/apps/details'
    || parsed.searchParams.get('id') !== expectedPackage) return;

  document.querySelectorAll('[data-store-link="google-play"]').forEach((link) => {
    link.href = parsed.href;
    link.rel = 'noopener noreferrer';
    link.removeAttribute('hidden');
  });
})();
