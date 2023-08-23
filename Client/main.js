document.getElementById("Button").addEventListener("click",(e)=>{ // click krk kya hoga
    e.preventDefault()
    // console.log('hello')
    const username=document.getElementById("username").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    const user={
        username:username,
        email:email,
        password:password
    }
    
    const url = "http://localhost:8081/users"
    const xhr= new XMLHttpRequest();
    xhr.open('POST',url);
    xhr.setRequestHeader('Access-Control-allow-origin','*')// sabko  access deta h
    xhr.setRequestHeader('Content-type','application/json')// form of data or content

    xhr.onreadystatechange=()=>{
        if(xhr.status==200 && xhr.readyState==4) // when data is on done stage
        {
            const response=JSON.parse(xhr.responseText);
            console.log(response);
            window.open("./login.html")
        }
    }
    xhr.send(JSON.stringify(user));
})