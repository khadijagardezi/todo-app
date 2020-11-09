const btn = document.getElementById('addTodo');
const toDoCon = document.getElementById('todosContain');
const inputF = document.getElementById('inputField');
btn.addEventListener("click", function () {
    let para = document.createElement('p');
    para.classList.add('paragraph');
    para.innerHTML = inputF.value;
    toDoCon.appendChild(para);
    inputF.value = '';


    para.addEventListener('click', function () {
        para.style.color = '#A52211';
        para.style.textDecoration = "line-through";
    })

    para.addEventListener('dblclick', function () {
        toDoCon.removeChild(para);

    })
})