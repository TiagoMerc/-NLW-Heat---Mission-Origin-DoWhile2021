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