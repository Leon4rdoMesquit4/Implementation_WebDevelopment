let nome = '';
let followers = 0;
let following = 0;
let bio = '';
let getUserName = "";

//
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um dado: ', (getUserName) => {
    let URL = "https://api.github.com/users/" + getUserName ;

    fetch(URL)
    .then(async res => {
        
        if (!res.ok) {
            throw new Error(res.status);
        }
    
        const data = await res.json();
    
        nome = data.login;
        followers = data.followers;
        following = data.following;
        bio = data.bio;
    
        console.log("Nome: ", nome, "\n", "Followers: " ,followers, "\n", "Following: ", following, "\n", "Bio: ", bio);
    })
    .catch(e => console.log(e));

    rl.close();
})