let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '=') {
            let result = eval(string);
            string = result.toString();
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'log') {
            string = Math.log10(parseFloat(string));
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'exp') {
            string = Math.exp(parseFloat(string));
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
