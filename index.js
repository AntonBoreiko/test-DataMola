
function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show')
         if (change.target.classList.contains('main__facts')) {
            change.target.classList.add('element-showSlow')
         } else {
            change.target.classList.remove('element-showSlow')
         }
      } else {
         change.target.classList.remove('element-show')
         change.target.classList.remove('element-showSlow')
      }
   })
}

let options = {
   threshold: [0.5]
}

let observer = new IntersectionObserver(onEntry, options)

let elements = document.querySelectorAll('.element-animation')

for (let elm of elements) {
   observer.observe(elm)
}
