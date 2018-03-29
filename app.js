
//Get local file data
document.getElementById('button1').addEventListener('click', getText);
function getText(){
  fetch('test.txt').then(function(res){
    return res.text();
  }).then(function(data){
    document.getElementById('output').innerHTML = data;
  }).catch(function(err){
    console.log(err);
  })
}

//Get local JSON data
document.getElementById('button2').addEventListener('click', getJson);

function getJson(){
  fetch('posts.json').then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data);
   
  let output = '';
  data.forEach(function(post){
    output += `<ul>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
               </ul>
                `;
  })
   
    document.getElementById('output').innerHTML = output;
  }).catch(function(err){
    console.log(err);
  })
}

// Get API Data
document.getElementById('button3').addEventListener('click', getExternal);

function getExternal(){
  fetch('https://api.github.com/users').then(res=>res.json()).then(data=>{
  let output = '';
  data.forEach(function(user){
    output += `<ul>
                <li>Title: ${user.login}</li>
                <li>Body: ${user.id}</li>
               </ul>
                `;
  })
   
    document.getElementById('output').innerHTML = output;
  }).catch(err=>console.log(err));
}