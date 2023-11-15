document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
 
    const ballImage = new Image();
    ballImage.src = 'https://img.icons8.com/3d-fluency/94/football2.png'; // Image URL for the ball
 
    let ball = {
        x: 50,
        y: 50,
        radius: 20,
        speed: 4,
        dx: 0,
        dy: 0,
        bounces: 0
    };
 
    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(ballImage, ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
        
        // Display the number of bounces on the canvas
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Number of bounces: ' + ball.bounces, 10, 20);
    }
 
    function update() {
        ball.x += ball.dx;
        ball.y += ball.dy;
 
        if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
            ball.dx = -ball.dx;
            ball.bounces++;
        }
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
            ball.dy = -ball.dy;
            ball.bounces++;
        }
 
        drawBall();
        requestAnimationFrame(update);
    }
 
    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
 
        const angle = Math.atan2(clickY - ball.y, clickX - ball.x);
        ball.dx = ball.speed * Math.cos(angle);
        ball.dy = ball.speed * Math.sin(angle);
    });
 
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function () {
        ball.bounces = 0;
    });
 
    ballImage.onload = function () {
        update();
    };
 });
 