axios({
    url: 'http://hmajax.itheima.net/api/province'
}).then((result) => {
    console.log(result)
    console.log(result.data.list.join("<br>"))
    document.querySelector('.my_p_1').innerHTML = result.data.list.join("<br>")
})  
