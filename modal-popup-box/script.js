const btnSubs = document.getElementById('btnSubs')
const btnCancel = document.getElementById('btnCancel')
const modalContainer = document.querySelector('.modal-container')
const tooltip = document.querySelector('.tooltip')

btnSubs.addEventListener('click', function () {
    modalContainer.classList.add('popupActive')

})
btnCancel.addEventListener('click', function () {
    modalContainer.classList.remove('popupActive')

})

//show/hide tooltip
btnSubs.addEventListener('mouseover', showToolTip);
btnSubs.addEventListener('mouseout', hideToolTip);

function showToolTip() {
    tooltip.style.display = 'block'; 
}

function hideToolTip() {
    tooltip.style.display = 'none'; 
}