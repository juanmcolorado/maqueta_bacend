

$(document).ready(function(){

    let btnSendUser = document.querySelector('#sendUser')
    
      //----------------------Función para crear posts con el método post ---------------------------------
      btnSendUser.addEventListener('click', () => {
        //console.log('click')
        let name = document.querySelector('#name').value
        let email = document.querySelector('#email').value
        let password = document.querySelector('#password').value
        console.log(name,email,password)
        if(
            name !== '' &&
            email !== '' &&
            password !== ''
        ){
            let objNewPost = {
              name: name,
              email: email,
              password: password,
            }
            //console.log(objNewPost)
    
            fetch('http://localhost:8080/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(objNewPost)
            })
            .then(response => {
              //location.reload()
            })
            .catch(error => {
              console.error('GET POSTS ERROR: ', error)
            })
        } else {
            alert('Algunos datos estan vacios')
        }
    
        })
    })
    