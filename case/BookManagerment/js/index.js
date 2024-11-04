const myModalEl = document.getElementById('myModal')
const myModal = new bootstrap.Modal(myModalEl); 
const myaddForm = document.getElementById('add_form')
const myList = document.querySelector('.list')
const submitBtn = document.getElementById('submitBtn')


myList.addEventListener('click',(e)=>{
  console.log(e.target)
  console.log(e.target.classList)
  if(e.target.classList.contains("del")) {
    console.log("e.target.parentNode.dataset "+e.target.parentNode.dataset)
    console.log("e.target.parentNode.dataset.id "+e.target.parentNode.dataset.id)
    console.log("e.target.dataset "+e.target.dataset)
    console.log("e.target.dataset.id "+e.target.dataset.id)
    const theId = e.target.parentNode.dataset.id


    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
      method: 'DELETE'
    }).then(result=>{
      console.log("delete successful") 
      getBooks()
    }).catch(error=>{
      console.log("delete failed") 
      console.log(error)
  })   
  }
})

submitBtn.addEventListener('click', ()=>{
    console.log("submit button clicked!")
    const bookName = document.getElementById('BookName').value
    const bookAuthor = document.getElementById('BookAuthor').value
    const bookPublisher = document.getElementById('BookPublisher').value
    insertBooks(bookName,bookAuthor,bookPublisher)
})



function insertBooks(name, author,publisher,...others) {
  console.log("TEST name "+name)
  console.log("TEST author "+author)
  console.log("TEST publisher "+publisher)
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method:'POST',
    data:{
        "bookname": name,
        "author": author,
        "publisher": publisher,
        "creator": "kyle"  
      }
    }).then(result=>{
      console.log("insert successful")
      getBooks()
      myaddForm.reset()
      myModal.hide()

    }).catch(error=>{
        console.log("Insert Failed")
        console.log(error)
    })  
}

function getBooks() {
  axios({
      url: 'http://hmajax.itheima.net/api/books',
      params:{
          'creator':"kyle"
        }
  }).then(result=>{
      const booklist = result.data.data
      const htmlStr = booklist.map((item,index)=>{
          return `<tbody class="list">
          <tr>
            <td>${item.id}</td>
            <td>${item.bookname}</td>
            <td>${item.author}</td>
            <td>${item.publisher}</td>
            <td>
              <span class="del">Delete</span>
              <span class="edit">Edit</span>
            </td>
          </tr>
        </tbody>`
      }).join('')
      document.querySelector(".list").innerHTML = htmlStr
      console.log(booklist)
  
  }).catch(error=>{
      console.log(error)
  })
}
getBooks()