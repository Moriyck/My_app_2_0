
export const canvas = () => {

}


var this_canvas = document.getElementById('myCanvas')
var context = this_canvas.getContext('2d')

function my_draw(x1, y1, x2, y2, depth) {
    if (depth === 0) {
        context.fillRect(x1, y1, 1, 1)
        context.fillRect(x2, y2, 1, 1)
        return
    }
    var dx = (x2 - x1) / 2
    var dy = (y2 - y1) / 2
    var x_new = x1 + dx - dy
    var y_new = y1 + dy + dx


    my_draw(x1, y1, x_new, y_new, depth - 1)
    my_draw(x2, y2, x_new, y_new, depth - 1)
}

this_canvas.width = window.innerWidth
this_canvas.height = window.innerHeight
context.fillStyle = `rgb(255, 0, 0)`
my_draw(100, 100, 300, 200, 16)