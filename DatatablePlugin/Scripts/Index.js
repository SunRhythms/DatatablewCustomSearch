DemoDatatable();
function DemoDatatable() {
    $("#demodata").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "orderMulti": false,
        "destroy": true,
        "ordering": true,
        "ajax": {
            "url": '/Home/GetTableData',
            "type": "POST",
            "datatype": "json"
        },

        "columns": [
            { "data": "Id", "name": "Id", "autoWidth": true }
            , { "data": "Name", "Name": "Name", "autoWidth": true }
            , { "data": "Quantity", "name": "Quantity", "autoWidth": true }
            , { "data": "Price", "name": "Price", "autoWidth": true }
            , { "data": "Status", "name": "Status", "autoWidth": true }
        ]
    });
}