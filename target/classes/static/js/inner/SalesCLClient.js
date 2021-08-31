$(document).ready(function () {
  var table = $("#allClients").DataTable({
    ajax: "/FinalProject/inner/sales/api/v1/clients/query?stage=CLOSED_LOST",
    colReorder: false,
    columnDefs: [
      {
        targets: -1,
        data: null,
        defaultContent: "<a href='#'><i class='fas fa-link'></i></a>",
        orderable: false,
      },
    ],
  });

  $("#allClients tbody").on("click", "a", function () {
    var data = table.row($(this).parents("tr")).data();
    url = `/FinalProject/inner/sales/ClientInfo?cli=${data[6]}`;
    window.open(url, "_blank").focus();
  });
});
