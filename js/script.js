$(document).ready(function() {
  
  let progress = $('#my-progress-bar').attr("style", "width: 0%")
  let currentProgress = 0
   
    $('.j-btn1').click(() => {
    let a = 1
    currentProgress = currentProgress + a
    console.log(currentProgress)
      progress = $('#my-progress-bar').attr("style", "width: " + currentProgress + "%") 
    })

  $('.j-btn3').click(() => {
    let a = 3
    currentProgress = currentProgress + a
    console.log(currentProgress)
      progress = $('#my-progress-bar').attr("style", "width: " + currentProgress + "%") 
    })

  $('.j-btn7').click(() => {
    let a = 7
    currentProgress = currentProgress + a
    console.log(currentProgress)
      progress = $('#my-progress-bar').attr("style", "width: " + currentProgress + "%") 
    })
})