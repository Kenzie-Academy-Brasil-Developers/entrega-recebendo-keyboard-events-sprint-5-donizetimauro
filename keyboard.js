let boxTop = 200;
let boxLeft = 200;
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    if(keyName=='ArrowUp'){
      document.getElementById("box").style.top = `${boxTop - 10}px`;
    }else if(keyName=='ArrowDown'){
      document.getElementById("box").style.top = `${boxTop + 10}px`;
    }else if(keyName=='ArrowRight'){
      document.getElementById("box").style.left = `${boxLeft + 10}px`;
    }else if(keyName=='ArrowLeft'){
      document.getElementById("box").style.left = `${boxLeft - 10}px`;
    }
  });

  