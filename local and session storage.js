console.log("hello");
let imparray=['adrak', 'chai'];
localStorage.setItem("name", "John");
localStorage.setItem("name2", "wifwsifhb");
sessionStorage.setItem("name", "spri");
sessionStorage.setItem("name3", "sJohn");
sessionStorage.setItem("name2", "swifwsifhb");
localStorage.setItem('sabzi', JSON.stringify(imparray));
let name= localStorage.getItem("name");
name =  JSON.parse(localStorage.getItem('sabzi'));
console.log(name);