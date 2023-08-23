document.getElementById("btn").addEventListener("click",(e)=>{ // click krk kya hoga
    e.preventDefault()
    console.log('hello')
    const useremail=document.getElementById("useremail").value
    const password=document.getElementById("password").value

    const user={
        useremail:useremail,
        password:password
    }
    console.log(useremail);
    console.log(password);
    const url = "http://localhost:8081/users"
    const xhr= new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.setRequestHeader('Access-Control-allow-origin','*')// sabko  access deta h
    xhr.setRequestHeader('Content-type','application/json')// form of data or content
    xhr.onreadystatechange=()=>{
        if(xhr.status==200 && xhr.readyState==4) // when data is on done stage
        {
            const response=JSON.parse(xhr.responseText);
            console.log(response);
            for(let i=0;i<response.length;i++){
                if(response[i].email==useremail&&response[i].password==password){
                  window.open("./index.html");
                }
                if(response[i].email!=useremail&&response[i].password!=password)
                {
                      console.log("user not found");
                } 
            }
                
        }

    }
    xhr.send(JSON.stringify(user));
})
