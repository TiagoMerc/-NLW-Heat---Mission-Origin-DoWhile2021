const LinksSocialMedia = {
  github: 'TiagoMerc',
  youtube: 'TiagoMercêsTiPLAY',
  facebook: 'maykbrito', //Não tenho Facebook
  instagram: 'tiagomr.7',
  twitter: 'TiagoTMR_7'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` //crases, sinal invertido
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}` //Guardei url num variável

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
