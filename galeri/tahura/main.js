var kanan = 2;
var tengah = 1;
var kiri = 1;
var L = 1;
var P = 1;
function SpamFoto(total_baris) {
    document.getElementById("baris1").innerHTML = "";
    document.getElementById("baris2").innerHTML = "";
    document.getElementById("baris3").innerHTML = "";
    for (let i = 0; i < total_baris; i++) {
        if (i % 2 == 0) {
            var L_ = P >= 20 ? `./img/L  (${L +2}).jpg`: `./img/L  (${L}).jpg`;
            var L_2 = P >= 20 ? `./img/L  (${L + 3}).jpg` : `./img/P  (${P}).jpg`;
            var L_3 = P >= 20 ? `./img/L  (${L + 4}).jpg`: `./img/L  (${L + 1}).jpg`;
            document.getElementById("baris1").innerHTML += `
            <a href="${L_}" data-lightbox="tahura-img">
            <img src="${L_}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_}" />
            </a>
            `;
            document.getElementById("baris2").innerHTML += `
            <a href="${L_2}" data-lightbox="tahura-img">
            <img src="${L_2}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_2}" />
            </a>
            `;
            document.getElementById("baris3").innerHTML += `
            <a href="${L_3}" data-lightbox="tahura-img">
            <img src="${L_3}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_3}" />
            </a>
            `;
            L += 2; 
            P++;
            
        }
        else {
             var L_ = P >= 20 ? `./img/L  (${L}).jpg` : `./img/P  (${P}).jpg`;
            var L_2 = P >= 20 ? `./img/L  (${L + 1}).jpg` : `./img/L  (${L}).jpg`;
            var L_3 = P >= 20 ? `./img/L  (${L + 2}).jpg`: `./img/P  (${P+1}).jpg`;
            document.getElementById("baris1").innerHTML += `
            <a href="${L_}" data-lightbox="tahura-img">
            <img src="${L_}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_}" />
            </a>
            `;
            document.getElementById("baris2").innerHTML += `
            <a href="${L_2}" data-lightbox="tahura-img">
            <img src="${L_2}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_2}" />
            </a>
            `;
            document.getElementById("baris3").innerHTML += `
            <a href="${L_3}" data-lightbox="tahura-img">
            <img src="${L_3}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_3}" />
            </a>
            `;
             L_2 >= 19 ? L+2 : L++;
             P += 2;
        }



        /* if (i % 2 == 0) {
            //genap
            document.getElementById("baris1").innerHTML += `
            <a href="./img/P  (${kiri}).JPG" data-lightbox="tahura-img">
            <img src="./img/P  (${kiri}).JPG"
            class="w-100 shadow-1-strong rounded mb-4" alt="P  (${kiri})" />
            </a>
            `;
            document.getElementById("baris2").innerHTML += `
            <a href="./img/L  (${tengah}).JPG" data-lightbox="tahura-img">
            <img src="./img/L  (${tengah}).JPG"
            class="w-100 shadow-1-strong rounded mb-4" alt="L  (${tengah})" />
            </a>
            `;
            document.getElementById("baris3").innerHTML += `
            <a href="./img/P  (${kanan}).JPG" data-lightbox="tahura-img">
            <img src="./img/P  (${kanan}).JPG"
            class="w-100 shadow-1-strong rounded mb-4" alt="P  (${kanan})" />
            </a>
            `;
            kanan = kanan + 1;
            kiri = kiri + 1;
            tengah = tengah + 2;
        }
        else {
            //ganjil
            document.getElementById("baris1").innerHTML += `
            <a href="./img/L  (${kiri}).JPG" data-lightbox="tahura-img">
            <img src="./img/L  (${kiri}).JPG"
            class="w-100 shadow-1-strong rounded mb-4" alt="L  (${kiri})" />
            </a>
            `;
            document.getElementById("baris2").innerHTML += `
            <a href="./img/P  (${tengah}).JPG" data-lightbox="tahura-img">
            <img src="./img/P  (${tengah}).JPG"
            class="w-100 shadow-1-strong rounded mb-4" alt="P  (${tengah})" />
            </a>
            `;
            document.getElementById("baris3").innerHTML += `
            <a href="./img/L  (${kanan}).JPG" data-lightbox="tahura-img">
            <img src="./img/L  (${kanan}).JPG"
            class="w-100 shadow-1-strong rounded mb-4" alt="L  (${kanan})" />
            </a>
            `;
            kanan = kanan + 2;
            kiri = kiri + 2;
            tengah = tengah + 1;
        }*/
    }
}

SpamFoto(15);

