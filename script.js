document.addEventListener("DOMContentLoaded", () => {
    let pressEqual = 0;
    const clear = document.querySelector(".AC");
    const eraser = document.querySelector("#del");
    const equal = document.querySelector("#equal");
    const input = document.querySelector("#display");
    const btn = document.querySelectorAll("input[type='button']");

    keyBoard();

    function keyBoard() {
        btn.forEach((button) => {
            button.addEventListener("click", () => {
                if (pressEqual == 1) {
                    input.value = "";
                    pressEqual = 0;
                }
                input.value += button.value;

            })
        })
        equal.addEventListener("click", handleEqual);
        clear.addEventListener("click", handleClear);
        eraser.addEventListener("click", handleEraser);

    }

    function handleEqual() {

        pressEqual = 1;
        let inpValue = input.value;
        try {
            let result = eval(inpValue);
            if (Number.isInteger(result)) {
                input.value = result;
            } else {
                input.value = result.toFixed(2);
            }
        } catch {
            alert("Invalid!");
            handleClear();
        }
    }
    function handleClear() {
        input.value = "";
    }
    function handleEraser() {
        input.value = input.value.substring(0, input.value.length - 1);
    }
})