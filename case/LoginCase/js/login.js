
const loginBtn = document.querySelector('.login-btn')
const myAlert = document.querySelector('.alert')
function alert (msg,success){
    myAlert.classList.remove('d-none');
    myAlert.innerText = msg
    myAlert.classList.add('show')
    myAlert.classList.add(success? 'alert-success':'alert-danger')

    setTimeout(()=> {
        myAlert.classList.add('d-none');
        myAlert.innerText = ''
        myAlert.classList.remove('show')
        myAlert.classList.remove(success? 'alert-success':'alert-danger')    
    },1000)
}

loginBtn.addEventListener('click',function(){
    event.preventDefault();
    console.log("clicked")
    const username = document.querySelector('.user').value  
    const password = document.querySelector('.pwd').value  
    console.log(username)
    console.log(password)
    const p = document.querySelector('.my_p_1')  
    axios({
        url: 'http://hmajax.itheima.net/api/login',
        method:'POST',
        data:{
            username,
            password
        }
    }).then(result => {
        console.log(result.data.message)
        alert('Login Success!',1)
    }).catch(error=>{
        console.log(error.response.data.message)
        alert('Login Failed!',0)
    }) 
      
})
