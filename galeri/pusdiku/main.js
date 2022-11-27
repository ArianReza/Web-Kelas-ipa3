var kanan = 2;
var tengah = 1;
var kiri = 1;
var L = 0;
function SpamFoto(total_baris) {
    document.getElementById("baris1").innerHTML = "";
    document.getElementById("baris2").innerHTML = "";
    document.getElementById("baris3").innerHTML = "";
    for (let i = 0; i < total_baris; i++) {
        var L_ = `./img/L  (${L + 1}).jpg`;
        var L_2 = `./img/L  (${L + 2}).jpg`;
        var L_3 = `./img/LA  (${L + 1}).jpg`;
        document.getElementById("baris1").innerHTML += `
            <a href="${L_}" data-lightbox="pusdiku-img">
            <img src="${L_}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_}" />
            </a>
            `;
        document.getElementById("baris2").innerHTML += `
            <a href="${L_2}" data-lightbox="pusdiku-img">
            <img src="${L_2}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_2}" />
            </a>
            `;
        document.getElementById("baris3").innerHTML += `
            <a href="${L_3}" data-lightbox="pusdiku-img">
            <img src="${L_3}"
            class="w-100 shadow-1-strong rounded mb-4" alt="${L_3}" />
            </a>
            `;
        L += 2;
    }
}

SpamFoto(5);

