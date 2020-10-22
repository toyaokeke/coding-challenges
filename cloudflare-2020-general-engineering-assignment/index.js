const links = [
  {
    name: 'My GitHub Profile',
    url: 'https://github.com/toyaokeke',
  },
  {
    name: 'My LinkedIn Profile',
    url: 'https://linkedin.com/in/toyaokeke',
  },
  {
    name: 'My Online Portfolio',
    url: 'https://toyaokeke.github.io',
  },
]

const social = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    svg:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    svg:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  },
  {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/',
    svg:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Snapchat icon</title><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>',
  },
]

// Event Listener
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// Status codes
const SERVER_SUCCESS_CODE = 200
const SERVER_BAD_REQUEST_CODE = 400
const SERVER_NOT_FOUND_CODE = 404
const SERVER_ACCESS_DENIED_CODE = 403

class LinksTransformer {
  constructor(links) {
    this.links = links
  }

  async element(element) {
    for (let i = 0; i < this.links.length; i++) {
      element.append(`<a href=${this.links[i].url}>${this.links[i].name}</a>`, {
        html: true,
      })
    }
  }
}

class ProfileTransformer {
  async element(element) {
    element.removeAttribute('style')
  }
}

class ImageTransformer {
  async element(element) {
    element.setAttribute(
      'src',
      'https://avatars1.githubusercontent.com/u/60804873?s=460&u=5091aa08ab7ebf2a640f0f48c827cf51b104aa4c&v=4',
    )
  }
}

class NameTransformer {
  async element(element) {
    element.setInnerContent('toyaokeke')
  }
}

class TitleTransformer {
  async element(element) {
    element.setInnerContent('Toya Okeke')
  }
}

class SocialTransformer {
  constructor(social) {
    this.social = social
  }

  async element(element) {
    element.removeAttribute('style')
    for (let i = 0; i < this.social.length; i++) {
      element.append(`<a href=${this.social[i].url}>${this.social[i].svg}</a>`, {
        html: true,
      })
    }
  }
}

class BodyTransformer {
  async element(element) {
    element.setAttribute('class', 'bg-blue-200')
  }
}
// HTMLRewriter
const htmlRewriter = new HTMLRewriter()
  .on('div#links', new LinksTransformer(links))
  .on('div#profile', new ProfileTransformer())
  .on('div#social', new SocialTransformer(social))
  .on('img#avatar', new ImageTransformer())
  .on('h1#name', new NameTransformer())
  .on('title', new TitleTransformer())
  .on('body', new BodyTransformer())

// Request Handler
async function handleRequest(request) {
  const headersJSON = { 'Content-type': 'application/json;charset=UTF-8' }
  const headersHTML = { 'Content-type': 'text/html;charset=UTF-8' }
  const apiEndpoint =     'https://static-links-page.signalnerve.workers.dev',

  if (request.url.endsWith('/links') && request.url.includes('/links'))
    return new Response(JSON.stringify(links), {
      headers: headersJSON,
      status: SERVER_SUCCESS_CODE,
    })

  const staticHTML = await fetch(
    apiEndpoint,
    headersHTML,
  )
  return htmlRewriter.transform(staticHTML)
}
