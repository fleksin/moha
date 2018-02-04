(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    element = INSTALL.createElement(options.location, element)

    // Set the app attribute to your app's dash-delimited alias.
    element.setAttribute('app', 'example')
    // element.innerHTML = '<iframe src="https://agora-demono.herokuapp.com/" width="' + options.shape.width + '" height="' + options.shape.height + '" ></iframe>'
    let iframe = document.createElement('iframe')
    iframe.src = 'https://moha-demo.herokuapp.com/'
    iframe.width = options.shape.width
    iframe.height = options.shape.height
    if (options.position === 'top-left') {
      iframe.style.left = '0'
      iframe.style.right = ''
      iframe.style.top = '40'
      iframe.style.bottom = ''
    } else if (options.position === 'top-right') {
      iframe.style.left = ''
      iframe.style.right = '0'
      iframe.style.top = '40'
      iframe.style.bottom = ''
    } else if (options.position === 'bottom-left') {
      iframe.style.left = '0'
      iframe.style.right = ''
      iframe.style.top = ''
      iframe.style.bottom = '0'
    } else if (options.position === 'bottom-right') {
      iframe.style.left = ''
      iframe.style.right = '0'
      iframe.style.top = ''
      iframe.style.bottom = '0'
    }
    element.appendChild(iframe)
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    }
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
