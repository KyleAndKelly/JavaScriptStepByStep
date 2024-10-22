
const loginBtn = document.querySelector('.login-btn')
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
        if(p){
            p.innerHTML = result.data.message
        }
    }).catch(error=>{
        console.log(error.response.data.message)
        if(p){
            p.innerHTML = error.response.data.message
        }
    }) 
      
})
