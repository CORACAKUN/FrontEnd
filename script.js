document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');
    const clearBtn = document.getElementById('clearBtn')
    const delBtn = document.getElementById('delBtn')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.textContent;
            //result.value += input; // Append the clicked button's text to the result
            
            if (input === '=') {
                try {
                    result.value = eval(result.value) //evaluate the expressions
                }
                catch {
                    result.value = 'error'
                }
            }
            else {
                result.value += input
            }
        });
    });

    clearBtn.addEventListener('click', () =>{
        result.value = ' '
    })

    delBtn.addEventListener('click', () =>{
        result.value = result.value.slice( 0, -1)
    })
});

