<template lang="pug">
	div
		.preload-box-mask(v-if="hasMask")
		.preload-box(v-if="status!=2")
			.preload-1(v-if="status==1")
				span
				span
				span
				span
				span
			.preload-2(v-if="status==3")
				span
				span
				span
				span
			.preload-3(v-if="status==4")
			.preload-4(v-if="status==5")
				span
				span
				span
				span
				span
			.preload-5(v-if="status==6")
		.loading(v-else)
			.animate1(v-if="type==1")
				.spinner
					.spinner-container.container1
						.circle1
						.circle2
						.circle3
						.circle4
					.spinner-container.container2
						.circle1
						.circle2
						.circle3
						.circle4
					.spinner-container.container3
						.circle1
						.circle2
						.circle3
						.circle4
				p(class="tip") 努力加载中, 请耐心等待~
			.animate(v-else)
				.spinner
					.spinner-container.container1
						.circle1
						.circle2
						.circle3
						.circle4
					.spinner-container.container2
						.circle1
						.circle2
						.circle3
						.circle4
					.spinner-container.container3
						.circle1
						.circle2
						.circle3
						.circle4
				p(class="tip") 正在获取...
</template>

<style lang="sass" scoped>
	/*loading*/
	.loading {
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 1100;
	}
	.loading .animate {
	    width: 2.2rem;
	    height: 2rem;
	    border-radius: 6px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin: -1rem 0 0 -1.1rem;
	    z-index: 2000;
	    background: rgba(51, 51, 51, .9);
	}
	.loading .animate1 {
		width: 3.2rem;
		height: 2rem;
		border-radius: 6px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -1rem 0 0 -1.6rem;
		z-index: 2000;
		background: rgba(51, 51, 51, .9);
	}
	.spinner {
	    margin: 0 auto;
	    margin-top: 13px;
	    width: .8rem;
	    height: .8rem;
	    position: relative;
	}

	.container1 > div,
	.container2 > div,
	.container3 > div {
	    width: .16rem;
        height: .16rem;
	    background-color: #fff;
	    border-radius: 100%;
	    position: absolute;
	    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
	    animation: bouncedelay 1.2s infinite ease-in-out;
	    -webkit-animation-fill-mode: both;
	    animation-fill-mode: both;
	}

	.spinner .spinner-container {
	    position: absolute;
	    width: 100%;
	    height: 100%;
	}

	.container2 {
	    -webkit-transform: rotateZ(45deg);
	    transform: rotateZ(45deg);
	}

	.container3 {
	    -webkit-transform: rotateZ(90deg);
	    transform: rotateZ(90deg);
	}

	.circle1 {
	    top: 0;
	    left: 0;
	}

	.circle2 {
	    top: 0;
	    right: 0;
	}

	.circle3 {
	    right: 0;
	    bottom: 0;
	}

	.circle4 {
	    left: 0;
	    bottom: 0;
	}

	.container2 .circle1 {
	    -webkit-animation-delay: -1.1s;
	    animation-delay: -1.1s;
	}

	.container3 .circle1 {
	    -webkit-animation-delay: -1.0s;
	    animation-delay: -1.0s;
	}

	.container1 .circle2 {
	    -webkit-animation-delay: -0.9s;
	    animation-delay: -0.9s;
	}

	.container2 .circle2 {
	    -webkit-animation-delay: -0.8s;
	    animation-delay: -0.8s;
	}

	.container3 .circle2 {
	    -webkit-animation-delay: -0.7s;
	    animation-delay: -0.7s;
	}

	.container1 .circle3 {
	    -webkit-animation-delay: -0.6s;
	    animation-delay: -0.6s;
	}

	.container2 .circle3 {
	    -webkit-animation-delay: -0.5s;
	    animation-delay: -0.5s;
	}

	.container3 .circle3 {
	    -webkit-animation-delay: -0.4s;
	    animation-delay: -0.4s;
	}

	.container1 .circle4 {
	    -webkit-animation-delay: -0.3s;
	    animation-delay: -0.3s;
	}

	.container2 .circle4 {
	    -webkit-animation-delay: -0.2s;
	    animation-delay: -0.2s;
	}

	.container3 .circle4 {
	    -webkit-animation-delay: -0.1s;
	    animation-delay: -0.1s;
	}

	@-webkit-keyframes bouncedelay {
	    0%,
	    80%,
	    100% {
	        -webkit-transform: scale(0.0)
	    }
	    40% {
	        -webkit-transform: scale(1.0)
	    }
	}

	@keyframes bouncedelay {
	    0%,
	    80%,
	    100% {
	        transform: scale(0.0);
	        -webkit-transform: scale(0.0);
	    }
	    40% {
	        transform: scale(1.0);
	        -webkit-transform: scale(1.0);
	    }
	}
	.animate .tip, .animate1 .tip {
	    text-align: center;
	    font-size: .26rem;
	    color: #fff;
	    margin-top: .4rem;
	}


	.preload-box-mask{
	  z-index: 1000;
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: rgba(0,0,0,0.5);
	}
	.preload-box{
	  z-index: 1100;
	  position: fixed;
	  top: 40%;
	  left: 0;
	  width: 100%;
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-pack: center;
	  -webkit-justify-content: center;
	      -ms-flex-pack: center;
	          justify-content: center;
	  -webkit-box-align: center;
	  -webkit-align-items: center;
	      -ms-flex-align: center;
	          align-items: center;
	}
	/*
	 5 4 0 5 0
	 */

	.preload-1 {
	  position: relative;
	  margin-left: -57px;
	  span {
	    display: block;
	    position: absolute;
	    bottom: 0px;
	    
	    width: 9px; height: 5px;
	    
	    background: coral;
	    
	    -webkit-animation: preload-1 1.5s infinite ease-in-out;
	    animation: preload-1 1.5s infinite ease-in-out;
	    &:nth-child(2) {
	      left: 11px;
	      
	      -webkit-animation-delay: .2s;
	      animation-delay: .2s;
	    }
	    &:nth-child(3) {
	      left: 22px;
	      
	      -webkit-animation-delay: .4s;
	      animation-delay: .4s;
	    }
	    &:nth-child(4) {
	      left: 33px;
	      
	      -webkit-animation-delay: .6s;
	      animation-delay: .6s;
	    }
	    &:nth-child(5) {
	      left: 44px;
	      
	      -webkit-animation-delay: .8s;
	      animation-delay: .8s;
	    }
	  }
	}

	@-webkit-keyframes preload-1 {
	  0% {
	    height: 5px;
	    -webkit-transform: translateY(0px);
	    background: coral;
	  }
	  25% {
	    height: 30px;
	    -webkit-transform: translateY(15px);
	    background: cornflowerblue;
	  }
	  50% {
	    height: 5px;
	    -webkit-transform: translateY(0px);
	    background: cornflowerblue;
	  }
	   100% {
	    height: 5px;
	    -webkit-transform: translateY(0px);
	    background: coral;
	  }
	}
	@keyframes preload-1 {
	  0% {
	    height: 5px;
	    transform: translateY(0px);
	    background: coral;
	  }
	  25% {
	    height: 30px;
	    transform: translateY(15px);
	    background: cornflowerblue;
	  }
	  50% {
	    height: 5px;
	    transform: translateY(0px);
	    background: cornflowerblue;
	  }
	   100% {
	    height: 5px;
	    transform: translateY(0px);
	    background: coral;
	  }
	}

	.preload-2 {
	  position: relative;
	  left: 0;
	  
	  width: 40px; height: 40px;
	  
	  span {
	    position: absolute;
	    display: block;
	    bottom: 0px;
	    
	    width: 20px; height: 20px;
	    
	    background: #9b59b6;
	    
	    &:nth-child(1) {
	      -webkit-animation: preload-2-1 1.5s infinite ease-in-out;
	      animation: preload-2-1 1.5s infinite ease-in-out;
	    }
	    &:nth-child(2) {
	      left: 20px;
	      -webkit-animation: preload-2-2 1.5s infinite ease-in-out;
	      animation: preload-2-2 1.5s infinite ease-in-out;
	    }
	    &:nth-child(3) {
	      top: 0px;
	      -webkit-animation: preload-2-3 1.5s infinite ease-in-out;
	      animation: preload-2-3 1.5s infinite ease-in-out;
	    }
	    &:nth-child(4) {
	      top: 0px;
	      left: 20px;
	      -webkit-animation: preload-2-4 1.5s infinite ease-in-out;
	      animation: preload-2-4 1.5s infinite ease-in-out;
	    }
	  }
	}

	@-webkit-keyframes preload-2-1 {
	  0% {
	    -webkit-transform: translateX(0) translateY(0) rotate(0);
	    border-radius: 0;
	  }
	  50% {
	    -webkit-transform: translateX(-20px) translateY(-10px) rotate(-180deg);
	    border-radius: 50%; background: #3498db;
	  }
	  80% {
	    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	}
	@keyframes preload-2-1 {
	  0% {
	    transform: translateX(0) translateY(0) rotate(0);
	    border-radius: 0;
	  }
	  50% { 
	    transform: translateX(-20px) translateY(-10px) rotate(-180deg); 
	    border-radius: 50%; background: #3498db;
	  }
	  80% {
	    transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	  100% {
	    transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	}
	@-webkit-keyframes preload-2-2 {
	  0% {
	    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);
	    border-radius: 0;
	  }
	  50% {
	    -webkit-transform: translateX(20px) translateY(-10px) rotate(180deg);
	    border-radius: 50%; background: #f1c40f;
	  }
	  80% {
	    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	}
	@keyframes preload-2-2 {
	  0% {
	    transform: translateX(0px) translateY(0px) rotate(0deg);
	    border-radius: 0;
	  }
	  50% {
	    transform: translateX(20px) translateY(-10px) rotate(180deg); 
	    border-radius: 50%; background: #f1c40f;
	  }
	  80% {
	    transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	  100% {
	    transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	}
	@-webkit-keyframes preload-2-3 {
	  0% {
	    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);
	    border-radius: 0;
	  }
	  50% {
	    -webkit-transform: translateX(-20px) translateY(10px) rotate(-180deg);
	    border-radius: 50%; background: #2ecc71;
	  }
	  80% {
	    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	}
	@keyframes preload-2-3 {
	  0% {
	    transform: translateX(0px) translateY(0px) rotate(0deg);
	    border-radius: 0;
	  }
	  50% { 
	    transform: translateX(-20px) translateY(10px) rotate(-180deg); 
	    border-radius: 50%; background: #2ecc71;
	  }
	  80% {
	    transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	  100% {
	    transform: translateX(0) translateY(0) rotate(-360deg);
	    border-radius: 0;
	  }
	}
	@-webkit-keyframes preload-2-4 {
	  0% {
	    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);
	    border-radius: 0;
	  }
	  50% {
	    -webkit-transform: translateX(20px) translateY(10px) rotate(180deg);
	    border-radius: 50%; background: #e74c3c;
	  }
	  80% {
	    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	  100% {
	    -webkit-transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	}
	@keyframes preload-2-4 {
	  0% {
	    transform: translateX(0px) translateY(0px) rotate(0deg);
	    border-radius: 0;
	  }
	  50% {
	    transform: translateX(20px) translateY(10px) rotate(180deg); 
	    border-radius: 50%; background: #e74c3c;
	  }
	  80% {
	    transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	  100% {    transform: translateX(0) translateY(0) rotate(360deg);
	    border-radius: 0;
	  }
	}


	.preload-3 {
	  position: relative;
	  margin-left: -45px;
	  &:before, &:after {
	    position: absolute;
	    
	    content: '';
	    
	    width: 20px; height: 20px;
	    
	    border-radius: 50%;
	  }
	  
	  &:before {
	    background: orange;
	    
	    -webkit-animation: preload-3-1 1.5s infinite ease-in-out;
	    animation: preload-3-1 1.5s infinite ease-in-out;
	  }
	  &:after {
	    background: yellow;
	    
	    left: 22px;
	    
	    -webkit-animation: preload-3-2 1.5s infinite ease-in-out;
	    animation: preload-3-2 1.5s infinite ease-in-out;
	  }
	}

	@-webkit-keyframes preload-3-1 {
	  0%, 100% {
	    -webkit-transform: translateX(0) rotate(0);
	  }
	  50% {
	    -webkit-transform: translateX(50px) scale(1.2) rotate(260deg);
	    border-radius: 0;
	  }
	}
	@keyframes preload-3-1 {
	  0%, 100% {
	    transform: translateX(0) rotate(0);
	  }
	  50% {
	    transform: translateX(50px) scale(1.2) rotate(260deg);
	    border-radius: 0;
	  }
	}

	@-webkit-keyframes preload-3-2 {
	  0%, 100% {
	    -webkit-transform: translateX(0) rotate(0);
	  }
	  50% {
	    -webkit-transform: translateX(-50px) scale(1.2) rotate(-260deg);
	    border-radius: 0;
	  }
	}
	@keyframes preload-3-2 {
	  0%, 100% {
	    transform: translateX(0) rotate(0);
	  }
	  50% {
	    transform: translateX(-50px) scale(1.2) rotate(-260deg);
	    border-radius: 0;
	  }
	}




	.preload-4 {
	  position: relative;
	  
	  span {
	    position: absolute;
	    
	    width: 20px; height: 20px;
	    background: dodgerblue;
	    border-radius: 50%;
	    
	    -webkit-animation: preload-4 1s infinite ease-in-out;
	    animation: preload-4 1s infinite ease-in-out;
	    
	    &:nth-child(2) {
	      left: 20px;
	      -webkit-animation-delay: .2s;
	      animation-delay: .2s;
	    }
	    &:nth-child(3) {
	      left: 40px;
	      -webkit-animation-delay: .4s;
	      animation-delay: .4s;
	    }
	    &:nth-child(4) {
	      left: 60px;
	      -webkit-animation-delay: .6s;
	      animation-delay: .6s;
	    }
	    &:nth-child(5) {
	      left: 80px;
	      -webkit-animation-delay: .8s;
	      animation-delay: .8s;
	    }
	  }
	}

	@-webkit-keyframes preload-4 {
	  0%, 100% {
	    opacity: 0.3;
	    -webkit-transform: translateY(0);
	    box-shadow: 0 0 3px rgba(255,255,255,0.1);
	  }
	  50% {
	    opacity: 1;
	    -webkit-transform: translateY(-10px);
	    box-shadow: 0 20px 3px rgba(255,255,255,0.05);
	  }
	}
	@keyframes preload-4 {
	  0%, 100% {
	    opacity: 0.3;
	    transform: translateY(0);
	    box-shadow: 0 0 3px rgba(255,255,255,0.1);
	  }
	  50% {
	    opacity: 1;
	    transform: translateY(-10px);
	    box-shadow: 0 20px 3px rgba(255,255,255,0.05);
	  }
	}




	.preload-5 {
	  position: relative;
	  width: 30px; height: 30px;
	  border-radius: 50%;
	  background: peachpuff;
	  
	  -webkit-animation: preload-5 1.5s infinite linear;
	  animation: preload-5 1.5s infinite linear;
	  
	  &:after {
	    content: '';
	    position: absolute;
	    width: 50px; height: 50px;
	    border-top: 10px solid coral;
	    border-bottom: 10px solid coral;
	    border-left: 10px solid transparent;
	    border-right: 10px solid transparent;
	    border-radius: 50%;
	    top: -20px; left: -20px;
	  }
	}

	@-webkit-keyframes preload-5 {
	  0% {
	    -webkit-transform: rotate(0);
	  }
	  50% {
	    -webkit-transform: rotate(180deg);
	  }
	  100% {
	    -webkit-transform: rotate(360deg);
	  }
	}
	@keyframes preload-5 {
	  0% {
	    transform: rotate(0);
	  }
	  50% {
	    transform: rotate(180deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			hasMask: {
				type: Boolean,
				default: false
			},
			status: {
				type: Number | String,
				default: 1
			},
			type: {
				type: Number | String,
				default: 0
			}
		}
	}
</script>