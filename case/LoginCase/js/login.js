const username = "randomuser"
const password = "123456"
const p_element = document.querySelector('.my_p_1')

axios({
    url: 'http://hmajax.itheima.net/api/login',
    method:'POST',
    data:{
        username,
        password
    }
}).then(result => {
    console.log(result.data.message)
    if(p_element){
        p_element.innerHTML = result.data.message
    }
}).catch(error=>{
    console.log(error.response.data.message)
    if(p_element){
        p_element.innerHTML = error.response.data.message
    }
}) 
