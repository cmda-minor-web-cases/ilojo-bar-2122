const form = document.querySelector('main form')

form.addEventListener('submit', function(e) {
    if (!window.confirm("Are you sure you want to send this story?")) {
      e.preventDefault()
    } else{
        window.alert('your story was send!')
    }
})