// Elements
const element = document.querySelectorAll('.btn');

// Event
element.forEach(element=> {
  element.addEventListener('click',() => {
    let command = element.dataset['element'];
    
    if (command == 'createLink' || command == 'insertImage') {
      let url = prompt('Enter the link here:', 'http://')
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);  
    }
  });  
});