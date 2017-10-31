gallery = document.getElementById 'gallery'
gallery.addEventListener 'click', (e) ->
  target = e.target
  while target.tagName != 'A'
    target = target.parentElement
  do e.preventDefault
  src = target.getAttribute 'href'
  @querySelector('.photo--big img').setAttribute 'src', src

window.addEventListener 'load', ->
  previews = gallery.querySelectorAll '.photo--preview'
  for preview in previews
    img = document.createElement('img')
    img.src = preview.getAttribute 'href'