const form = document.getElementById('formP');
const board = document.getElementById(`boardie`);

ambilP()
function ambilP() {
  $.get( "https://side.kennkenn.repl.co/load", function( data ) {
    JSON.parse(data).forEach((pesanID) => {
      createP(pesanID.pesan, pesanID.nama, pesanID.tanggal);
    
    });
  });
 
}

function createP(pesan, nama, tanggal) {
  document.getElementById("boardie").innerHTML += `
<div class="col-lg-4">
              <div class="card card-body">
                  <span class="side-stick"></span>
                  <h5 class="note-title text-truncate w-75 mb-0" data-noteheading="${nama}">
                  ${nama}</h5>
                  <p class="note-date font-12 text-muted">${tanggal}</p>
                  <div class="note-content">
                      <p class="note-inner-content text-muted"
                          data-notecontent="${pesan}.">
                          ${pesan}</p>
                  </div>
                  <div class="d-flex align-items-center">

                  </div>
              </div>
          </div>`;
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
})

$(document).ready(function () {

  var user, pesan;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth());
  var yyyy = today.getFullYear();
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  today = dd + ' ' + monthNames[mm] + ' ' + yyyy;

  //Modal click
  $("#Tpesan").click(function () {
      const toastLiveExample = document.getElementById('liveToast')
      user = $("#nama-pesan").val();
      pesan = $("#message-text").val();
      if (user == "" || user == "") {
          user += "-";
      }

      
      createP(pesan, user, today)
      document.getElementById(`nama-pesan`).value == "";
      document.getElementById(`message-text`).value == "";
      $.post("https://side.kennkenn.repl.co/add",
          {
              nama: user, pesan: pesan, tanggal: today
          },
          function (data) {
              if (data === 'yes') {
                  const toast = new bootstrap.Toast(toastLiveExample)

                  toast.show()

              }
          });
  });
});