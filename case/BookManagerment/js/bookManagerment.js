const myModalEl = document.getElementById('myModal')
const myModal = new bootstrap.Modal(myModalEl); 
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', ()=>{
    const bookNameVal = document.getElementById('BookName').value
    console.log("submit clicked!")
    console.log(bookNameVal)
    myModal.hide()
})
