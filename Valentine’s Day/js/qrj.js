function TinyHeart(t, e, s) {
    this.container = s,
    this.init(t, e)
}
var px = function(t) {
    return t ? Math.floor(t) + "px": 0
},
getRadian = function(t) {
    var e = window.getComputedStyle(t),
    s = e.getPropertyValue("transform");
    if (!s.match("matrix")) return 0;
    var a = s.match(/-?0(\.[0-9]*[1-9])?/gi).map(function(t) {
        return parseFloat(t, 10)
    });
    return - Math.asin(a[1])
},
random = function(t, e) {
    return t && "number" == typeof t.length ? t[Math.floor(Math.random() * t.length)] : ("number" != typeof e && (e = t || 1, t = 0), t + Math.random() * (e - t))
};
TinyHeart.STYLES = ["t01dc2e861029c8a8ca", "t016cc24a48997d651a", "t01dd2a63c80cbdbc30"],
TinyHeart.prototype = {
    init: function(t, e) {
        this.alive = !0,
        this.scale = random(.3, .7),
        this.opacity = random(50, 70) / 100,
        this.style = random(TinyHeart.STYLES);
        var s = random(2 * Math.PI);
        this.x = t + 80 * Math.sin(s) - 48 * this.scale / 2,
        this.y = e + 80 * Math.cos(s) - 42 * this.scale / 2,
        this.theta = random(2 * Math.PI),
        this.drag = random(.9, .99),
        this.wander = random(.5, 2),
        this.force = random(.1, .4),
        this.vx = Math.sin(this.theta) * this.force,
        this.vy = Math.cos(this.theta) * this.force,
        this.draw()
    },
    move: function() {
        this.x += this.vx,
        this.y += this.vy,
        this.vx *= this.drag,
        this.vy *= this.drag,
        this.theta += random( - .5, .5) * this.wander,
        this.vx += .1 * Math.sin(this.theta),
        this.vy += .1 * Math.cos(this.theta),
        this.scale *= .995,
        this.opacity *= .96,
        this.alive = this.opacity > .1,
        this.draw()
    },
    draw: function() {
        var t = this.img;
        t || (t = document.createElement("img"), t.src = "http://p4.qhimg.com/" + this.style + ".png", this.container.appendChild(t), this.img = t),
        t.style.left = px(this.x),
        t.style.top = px(this.y),
        t.style.width = px(48 * this.scale),
        t.style.height = px(42 * this.scale),
        t.style.opacity = this.opacity
    },
    destory: function() {
        this.img && this.container.removeChild(this.img)
    }
};
var shakes = {
    MAX_PARTICLES: 500,
    pool: [],
    start: function(t, e, s) {
        shakes.ropeH = t,
        shakes.container = e,
        shakes.timer = setInterval(function() {
            shakes.spawn(getRadian(s)),
            shakes.update()
        },
        50)
    },
    spawn: function(t) {
        if (! (shakes.pool.length >= shakes.MAX_PARTICLES)) {
            var e = Math.sin(t) * (shakes.ropeH + 40),
            s = Math.cos(t) * (shakes.ropeH + 40) + 20;
            heart = new TinyHeart(e, s, shakes.container),
            shakes.pool.push(heart)
        }
    },
    update: function() {
        var t, e;
        for (t = shakes.pool.length - 1; t >= 0; t--) e = shakes.pool[t],
        e.alive ? e.move() : (e.destory(), shakes.pool.splice(t, 1))
    },
    stop: function() {
        clearInterval(shakes.timer),
        shakes.pool.forEach(function(t) {
            t.destory()
        }),
        shakes.pool = []
    }
},
init = function() {
    var t = 180,
    e = document.querySelector("#valentine"),
    s = e.querySelector(".tiny"),
    a = e.querySelector(".shake"),
    i = function() {
        e.querySelector(".close").addEventListener("click",
        function() {
            shakes.stop(),
            e.style.display = "none"
        })
    };
    shakes.start(t, s, a),
    a.querySelector(".rope").style.height = t + "px",
    a.querySelector(".heart-wrap").style.top = t - 60 + "px",
    e.style.display = "block",
    i()
};
init();