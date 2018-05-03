var game = function(){

    var playground = document.getElementById('playground');

    var currentUser = {
      id : null,
      photo: null

    }

var socket = io();

    function start(){

      currentUser.id = id;
      currentUser.photo = photo;
      playground.addEventListener('click', playgroundClicked);

      addUser( currentUser.id, currentUser.photo);
    }

socket.on("someone moved", function(data){

  var user = document.getElementById(data.id)

  if (user) {
    MoveUser(data.id, data.photo)
  }

  MoveUser(data.id, data.x, data.y);

});


    function playgroundClicked(event){
      var x = event.layerX,
          y = event.layerY;

          MoveUser(currentUser.id, x, y);

          socket.emit('user moved', {
            id: currentUser.id,
            photo: currentUser.photo,
            x: x,
            y: y
          });

    }

    function MoveUser(id, x, y){

      var user = document.getElementById(id);

      user.style.left = x + 'px';
      user.style.top = y + 'px';
    }

    function addUser( id, photo ){
      var user = document.createElement('IMG');
      user.classList.add('user');
      user.src = photo || 'http://cdn.syg.ma/assets/empty_userpic-c72be2c88beb2bc8cc3b4c15ab082deca667c263a2099e36b5f8a71a139c2e65.png'
      user.id = id;

      playground.appendChild(user);
    }

    return {
      playground : playground,
      start:start
    };

}();

var photo = window.prompt('Enter photo URL');

game.(+new Date(), );
