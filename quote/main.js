/* ==== MENU PHONE === */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ====== SPAAAAM FOTOOOOOOO ==== */
// == array ==
let filter_array = [];

let quote_array = [
    {
        id: 1,
        name: "Aisyah Nur Thalita Kawai",
        src: "./img/kawai.jpeg",
        quote: "semangat yh di alcent",
        insta: "https://instagram.com/ant_kawaiiii",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 2,
        name: "Aqila Nayyara Nugraha",
        src: "./img/aqila.jpg",
        quote: "if you fail to plan, you plan to fail",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 3,
        name: "Arian Muhammad Reza",
        src: "./img/arian.jpg",
        quote: "I sit back and watch the time fly <br> Then I pretend that I'm alright",
        insta: "https://instagram.com/arian_.27",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 4,
        name: "Awva Dzikrina Khairunnisaa",
        src: "./img/awva.jpeg",
        quote: ".",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 5,
        name: "Dini Hamdiyah Khoerunisa",
        src: "./img/dini.png",
        quote: "tiada hari tanpa tugas alcent (gatau ngasal)",
        insta: "https://instagram.com/diini_hamdiyah",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 6,
        name: "Dzakir Tsabit Asy Syafiq",
        src: "./img/dzakir.jpg",
        quote: "Ada orang yang langsung naik dengan cepat ada orang yang baik dengan bertahap memang skill kita berbeda tetapi dengan usaha semua akan bisa",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 7,
        name: "Farrel Dypta",
        src: "./img/dypta.jpg",
        quote: "selalu berusaha walaupun terkadang tetap tidak memuaskan",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 8,
        name: "Farrel Muhammad Athiarizki",
        src: "./img/farrelm.jpg",
        quote: "hidup mah hidup aja",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 9,
        name: "Faza Ghaisani Amalia",
        src: "./img/faza.jpeg",
        quote: "aku cantik",
        insta: "https://instagram.com/fazaghaisanii",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 10,
        name: "Haifa Fasya Azzahra",
        src: "./img/haifa.jpg",
        quote: "semua anak perempuan deserve dirangkul haechan",
        insta: "https://instagram.com/haifafsy",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com/saturdydrip",
    },
    {
        id: 11,
        name: "Imtiyaz Kaltsum Khalishah",
        src: "./img/imtiyaz.jpg",
        quote: "tetap smangat walaupun 5L (lemah, letih, lesu, lelah, lunglai)",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 12,
        name: "Kalisa Ramadhani",
        src: "./img/kalisa.jpg",
        quote: "centaurian sehat?",
        insta: "https://instagram.com/kalisaar",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 13,
        name: "Lukman Firdaus",
        src: "./img/lukman.jpg",
        quote: "aku ngantuk. ",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 14,
        name: "Divo Arthly Syah Haqiqie",
        src: "./img/divo.jpg",
        quote: "a bad plan is better than no plan at all",
        insta: "https://instagram.com/m.divo_",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 15,
        name: "Azhar Fauzan Azhiiman",
        src: "./img/azhar.png",
        quote: "si halan beli ikan lele <br> halah sepele",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 16,
        name: "Givari Ramdhan Kagira",
        src: "./img/givari.jpg",
        quote: "Gabutuh quotes motivasi, butuhnya rekening terisi",
        insta: "https://instagram.com/ghivari_kagira_20",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 17,
        name: "Shabir Abdul Mughni",
        src: "./img/shabir.jpg",
        quote: "Bandung tiriss wellllll🤟",
        insta: "https://instagram.com/Shabir.mughni",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 18,
        name: "Muthia Putri Affifah",
        src: "./img/muthia.jpg",
        quote: "trying now is better than crying later <3",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 19,
        name: "Nadia Shalihani Shafira",
        src: "./img/nadias.jpeg",
        quote: ".",
        insta: "https://instagram.com/nadiassfhr",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com/shfnnra",
    },
    {
        id: 20,
        name: "Naufal Aziz Taqiyyuddin Kamil",
        src: "./img/ajis.jpg",
        quote: "2 3 ipul jaga kebon <br> ajis ganteng to the bone",
        insta: "https://instagram.com/naufalaziztk",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 21,
        name: "Naufal Kavi Dharmawan",
        src: "./img/kavi.jpg",
        quote: "kalo orang lain bisa kenapa harus saya",
        insta: "https://instagram.com/naufalkavid",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 22,
        name: "Qonita Hafiza",
        src: "./img/qonita.jpg",
        quote: "kalau ada makanan dimeja, lee jeno yang kumakan",
        insta: "https://instagram.com/",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 23,
        name: "Raihan AKbar Kautsar",
        src: "./img/raihan.jpg",
        quote: "Kata mamah aku ganteng",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 24,
        name: "Yovana Ibnu Sina",
        src: "./img/yopan.jpg",
        quote: "do u know teh tarik? cuz i tertarik with u",
        insta: "https://instagram.com/yoowvan",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 25,
        name: "Nadia Zahira Nurafifa",
        src: "./img/nadiaz.jpeg",
        quote: "yaudahlah",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    },
    {
        id: 26,
        name: "Banna Saadah",
        src: "./img/banna.jpg",
        quote: "why pass exams when you can pass away",
        insta: "https://instagram.com",
        tiktok: "https://tiktok.com",
        twitter: "https://twitter.com",
    }
]


// == func ==

function ShowQuote(arraynya) {
    document.getElementById("card").innerHTML = "";
    for (let i = 0; i < arraynya.length; i++) {
        document.getElementById("card").innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div
                            class="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
                            <div class="profile-card_image">
                                <img src="${arraynya[i].src}" alt="${arraynya[i].name}" class="mb-4 shadow">
                            </div>
                            <div class="profile-card_details">
                                <p class="card-name fw-bold fs-5 mb-0">${arraynya[i].name}</p>
                                <p class="bx bxs-quote-alt-left card-name text-muted mt-4"> ${arraynya[i].quote} <i
                                        class='bx bxs-quote-alt-right'></i></p>
                            </div>
                            <div class=" text-center" style="position: absolute; left: 0; bottom: 20px; width: 100%;">
                                <a href="${arraynya[i].insta}" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="${arraynya[i].twitter}" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="${arraynya[i].tiktok}" target="_blank" rel="noopener noreferrer" class="d-inline-block p-2">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
    `
    }
}


// == call func ==
ShowQuote(quote_array);

// == Search bar ==

document.getElementById("myinput").addEventListener("keyup", function () {
    let text = document.getElementById("myinput").value.toLowerCase();

    filter_array = quote_array.filter(function (s) {
        if (s.name.toLowerCase().includes(text)) {
            return s.name;
        }
    });

    if (this.value == "") {
        ShowQuote(quote_array);
        document.getElementById("notfound").style.display = "none";
        document.getElementById("miss").style.display = "block";
    }
    else if (this.value == "dev" || "developer") {
        egg = quote_array.filter(function (s) {
            if (s.name.toLowerCase().includes("arian")) {
                return s.name;
            }
        });
        ShowQuote(egg);
        document.getElementById("notfound").style.display = "none";
        document.getElementById("miss").style.display = "none";

    }
    else {
        if (filter_array == "") {
            document.getElementById("notfound").style.display = "block";
            document.getElementById("card").innerHTML = "";
            document.getElementById("miss").style.display = "none";
        }
        else {
            ShowQuote(filter_array);
            document.getElementById("notfound").style.display = "none";
            document.getElementById("miss").style.display = "none";
        }
    }


});