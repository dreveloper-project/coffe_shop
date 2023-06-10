<template>
    
        <div  data-aos-delay="500" id="story" class=" flex-col md:flex-row  md:mt-[4rem] gap-6 md:w-[95%] md:px-3  lg:px-0 mx-auto flex justify-center text-white ">
            <div data-aos="fade-right" class="  flex flex-col items-center h-[27rem] w-[100%] md:h-[32rem] md:w-[14rem] lg:w-[18rem] ">
            
                <div class=" w-[100%]  md:w-[100%] h-[19rem] bg-[url('/image/story-1.jpg')] bg-cover bg-center bg-no-repeat ">
                </div>

                <h2 class=" font-philosoph mt-3 text-[1.4rem]">We Believe In Good Food And Even Better Company.</h2>
                <p class=" font-philosoph">Good food is more than just fuel for our bodies. It is a source of pleasure, comfort, and enjoyment. Good food nourishes not only our bodies but also our souls. It can bring people together, create memories, and even inspire creativity.</p>

                <button class=" font-philosoph p-3 border-solid border-2 border-white my-3 ">
                    Our Story
                </button>
            </div>

            <div  data-aos-delay="600" data-aos="fade-up" class=" h-[23rem] w-[100%] md:w-[14rem] lg:w-[18rem] bg-[url('/image/story-2.jpg')] bg-center bg-cover bg-no-repeat">

            </div>

            <div data-aos="fade-left" class=" h-[22rem] md:w-[14rem] lg:w-[18rem]  mt-[4rem] px-4  ">
                <h2 class=" font-coffee text-[2rem] text-white text-center  ">KOPI MUD Hug In Mug</h2>
                <div class="h-[15rem] md:w-[12rem] lg:w-[14rem] bg-[url('/image/story-3.jpg')] bg-center bg-cover bg-no-repeat"></div>
                </div>
        </div>
</template>

<script>

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
   
    mounted(){
        AOS.init();
    }
};

</script>