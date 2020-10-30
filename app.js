document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let isGameOver = false;
    let platformCount = 5;
    let platforms = [];
    let upTimeId;
    let downTimeId;

    function createDoodler(){
        grid.appendChild(doodler);
        doodler.classList.add('doodler');
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
       
    }

    class Platform  {
        constructor(newPlatBottom){
            this.bottom = newPlatBottom;
            //(grid-width - doddler-height) = 400-85 = 315
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');
            
            const visual= this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual);
        }
    }
        function createPlaforms(){
            for(let i=0; i< platformCount ; i++){
                // 600 is the height of the platform
                let platSpacing = 600/platformCount;
                let newPlatBottom = 100 + i * platSpacing;
                let newPlatform = new Platform(newPlatBottom);
                platforms.push(newPlatform);
                console.log(platforms);
            }
        }

        function movePlatform(){
            if(doodlerBottomSpace > 200){
                platforms.forEach(platform => {
                    platform.bottom -= 4;
                    let visual = platform.visual
                    visual.style.bottom = platform.bottom + 'px';
                });

            }
        }
        function jump() {
            upTimeId = setInterval(function (){
                doodlerBottomSpace += 20;
                doodler.style.bottom = doodlerBottomSpace + 'px';
            }, 30) //invoke it every 30 seconds
        }

        function start(){
            if (!isGameOver){
                createDoodler();
                createPlaforms();
                setInterval(movePlatform,30);
                jump();
            }
        }
        start();
})