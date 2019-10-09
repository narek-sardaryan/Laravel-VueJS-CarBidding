<template>
    <div :style="styles" class="spinner spinner--cube">
        <!--        <div :style="cubeStyles" class="cube1"></div>-->
        <!--        <div :style="cubeStyles" class="cube2"></div>-->
<!--        <img src="https://thumbs.gfycat.com/AchingSpeedyArmyworm-size_restricted.gif"> -->
        <img src="https://i.pinimg.com/originals/ed/23/68/ed23685339ada1b6d88008cbe1a11e98.gif"> 
    </div>

</template>

<script>
    export default {
        name: "Cube",
        props: {
            size: {
                default: '150x'
            },
            background: {
                default: '#0f92ff'
            },
            duration: {
                default: '0s'
            },
        },
        computed: {
            cubeStyles() {
                return {
                    backgroundColor: this.background,
                    animationName: 'sk-cubemove',
                    animationDuration: this.duration,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite'
                }
            },
            styles() {
                return {
                    width: this.size,
                    height: this.size
                }
            }
        }
    }
</script>

<style>
    .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        z-index: 1;
    }

    .cube1, .cube2 {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 500px;
        left: 900px;
    }

    .cube2 {
        animation-delay: -0.9s;
    }

    /*@keyframes sk-cubemove {*/
    /*    25% {*/
    /*        transform: translateX(20px) rotate(-90deg) scale(0.5);*/
    /*    }*/
    /*    50% {*/
    /*        transform: translateX(20px) translateY(20px) rotate(-179deg);*/
    /*    }*/
    /*    50.1% {*/
    /*        transform: translateX(20px) translateY(20px) rotate(-180deg);*/
    /*    }*/
    /*    75% {*/
    /*        transform: translateX(0px) translateY(20px) rotate(-270deg) scale(0.5);*/
    /*    }*/
    /*    100% {*/
    /*        transform: rotate(-360deg);*/
    /*    }*/
    /*}*/
</style>
