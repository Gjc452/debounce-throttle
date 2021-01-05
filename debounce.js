let count = 1;
let container = document.querySelector("#container");
function getUserAction() {
  container.innerHTML = count++;
}

// debounce 第一版
function debounce1(fn, wait) {
  var timeout;
  return function () {
      clearTimeout(timeout)
      timeout = setTimeout(fn, wait);
  }
}

// debounce this 版本
function debounce2(fn, wait) {
  var timeout;
  return function () {
      var context = this;
      clearTimeout(timeout)
      timeout = setTimeout(function(){
          fn.apply(context)
      }, wait);
  }
}

// debounce event 对象
function debounce(fn, wait) {
  var timeout;
  return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timeout)
      timeout = setTimeout(function(){
          fn.apply(context, args)
      }, wait);
  }
}

// throttle 时间戳
function throttle(fn,wait){
  var context,args
  var pervious = 0
  return function(){
    var now = +new Date()
    context = this
    args = arguments
    if(now - pervious >wait){
        fn.apply(context,args)
        pervious = now
    }
  }
}

// throttle 计时器
function throttle(fn,wait){
  var timeout
  return function(){
    context = this
    args = arguments
    if(!timeout){
      timeout = setTimeout(function(){
        timeout = null
        fn.apply(context,args)
      },wait)
    }
  }
}

container.onmousemove = throttle(getUserAction, 1000);
