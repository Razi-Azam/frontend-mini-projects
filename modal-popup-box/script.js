const btnSubs = document.getElementById('btnSubs')
const btnCancel = document.getElementById('btnCancel')
const modalContainer = document.querySelector('.modal-container')

btnSubs.addEventListener('click', function () {
    modalContainer.classList.add('popupActive')

})
btnCancel.addEventListener('click', function () {
    modalContainer.classList.remove('popupActive')

})