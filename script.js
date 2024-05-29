const searchBar = document.querySelector('input')
const button = document.querySelector('button');
const username = document.querySelector('#profileUsername');
const PublicRepos = document.querySelector('.Public-repos');
const type = document.querySelector('.type');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const img = document.querySelector('img')


let url = 'https://api.github.com/users/'


button.addEventListener('click', () => {
   url = `${url}${searchBar.value}`
   console.log(url)
   
   fetch(url)
   .then((response) => {return response.json()})
   .then((data) => {displayProfile(data)})
   .catch(error => {console.log(error)})

   function displayProfile(data) {
      img.setAttribute("src", `${data.avatar_url}`)
      username.innerHTML = `Username: ${data.login}`
      PublicRepos.innerHTML = `Public Repositories: ${data.public_repos}`
      type.innerHTML = `Profile Type: ${data.type}`
      followers.innerHTML = `Followers: ${data.followers}`
      following.innerHTML = `Following: ${data.following}`
   }
   url = `https://api.github.com/users/`
})

