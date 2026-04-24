function checkHeat() {
    var t = document.getElementById("temp_input").value;
    var h = document.getElementById("humid_input").value;

    if (t == "" || h == "") {
        window.alert("Please enter values first!");
        return;
    }

    var heat_index = Number(t) + (0.33 * h) - 4;
    var status = "";

    switch (true) {
        case (heat_index <= 27):
            status = "Comfortable / Cool";
            break;
        case (heat_index >= 28 && heat_index <= 32):
            status = "Warm";
            break;
        case (heat_index >= 33 && heat_index <= 37):
            status = "Hot";
            break;
        case (heat_index >= 38 && heat_index <= 41):
            status = "Very Hot / Caution";
            break;
        case (heat_index >= 42):
            status = "Extreme Heat / Danger";
            break;
        default:
            status = "Error";
    }

    window.alert("Heat Index: " + heat_index.toFixed(1) + "°C \nStatus: " + status);
}