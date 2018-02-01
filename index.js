import './assets/sass/style.sass';
import { detay } from './veri';

let bilgi = `Benim adım ${detay.adSoyad} ${detay.sirket} şirketinde ${detay.gorev} görevinde çalışıyorum.`;

document.getElementById('icerik').innerHTML = bilgi;