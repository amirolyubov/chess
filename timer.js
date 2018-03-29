let name = document.getElementById('name'),
    white = document.getElementById('white_time'),
    black = document.getElementById('black_time'),
    reset = document.getElementById('reset'),
    steps = document.getElementById('steps'),
    random_step = document.getElementById('random_step'),
    separator = document.getElementById('separator')

let selected = 0,
    timer_black = 0,
    timer_white = 0,
    space_count = 0

let white_interval, black_interval

let white_timer = () => {
  white_interval = setInterval(() => {
    timer_white += 1
    white.innerHTML = `${Math.floor(timer_white / 60)}:${timer_white % 60 < 10 ? '0' : ''}${timer_white % 60}`
  }, 1000)
  clearInterval(black_interval)
}
let black_timer = () => {
  black_interval = setInterval(() => {
    timer_black += 1
    black.innerHTML = `${Math.floor(timer_black / 60)}:${timer_black % 60 < 10 ? '0' : ''}${timer_black % 60}`
  }, 1000)
  clearInterval(white_interval)
}

document.onkeyup = event => {
  if (event.code === "Space") {
    space_count++
    // if (space_count % 3 == 0) random_step.innerHTML = ['A','B','C','D','E','F','G','H'][Math.round(Math.random() * 7)] + new String([1,2,3,4,5,6,7,8][Math.round(Math.random() * 7)])
    if (selected === 0) {
      white_timer()
      document.body.classList.remove('black')
    } else {
      black_timer()
      document.body.classList.add('black')
    }
    name.innerHTML = ['WHITE', 'BLACK'][selected]
    steps.innerHTML = space_count
    selected = selected === 0 ? 1 : 0
  }
}
separator.onclick = () => {

}
