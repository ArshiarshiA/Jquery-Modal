// IN ONE LINE :) // $('document').ready(() => $('.clicktomore').on('click', (e) => $(e.target.parentElement.nextElementSibling).toggle(1000)));
$('document').ready(() => {
    $('.clicktomore').on('click', (e) => {
        $(e.target.parentElement.nextElementSibling).toggle(1000)
    })
})