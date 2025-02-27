const input = document.getElementById("result");


function addValue(value) {
    input.value +=  value;
};
function clearScreen() {
    input.value = "";
};

function showResult() {
    try {
        input.value = eval(input.value);

    }
    catch (error) {
        input.value = "Error"
    };

};