const options = ['A idź w ciul!', 'Dej pozór', 'Fandzolisz synek', 'Posłuchej omy, łona dobrze prawi', 'Bier się do roboty, a nie ino łosprawiosz', 'Kaj nie pódziesz i tak Cie dorwą', 'Łostow sie ta robota na potym', 'Jak nie rozumisz, to sie czepnij w kalfas!'];

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length)
    console.log(index);
    document.querySelector('h1').textContent = options[index];
}

const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    options.push(input.value)
    alert(`dodana została opcja ${input.value}`);
    input.value = "";
}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 7;
    document.querySelector('h1').textContent = ""
}

const showOptions = () => {
    alert(options.join(" --- --- "))
}

document.querySelector('.add').addEventListener('click', addOption)

document.querySelector('.clean').addEventListener('click', resetOptions)

document.querySelector('.showAdvice').addEventListener('click', showAdvice)

document.querySelector('.showOptions').addEventListener('click', showOptions)