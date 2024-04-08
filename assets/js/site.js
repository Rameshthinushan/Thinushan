const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(() => {
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove((e) => {
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(() => {
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);
})


const active = (id, obj) => {
  const clickId = `#nav-${id}`,
  activeClass = 'site-color-orange', 
  disActiveClass = 'nav-text__color',
  classList = document.querySelector(clickId).classList;

  if(!classList.contains(activeClass)) {
    classList.remove(disActiveClass)
    classList.add(activeClass)
  }

  obj.forEach(element => {
    const originalID = `#nav-${element}`,
    classListOthers = document.querySelector(originalID).classList;

    if (classListOthers.contains(activeClass)) {
      classListOthers.remove(activeClass)
      classListOthers.add(disActiveClass)
    }
  });
}




