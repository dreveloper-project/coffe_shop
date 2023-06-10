<template>

    <div class=" mt-[4rem] md:h-[27rem] w-[100vw] bg-[url('/image/bg-explore.jpg')] bg-cover bg-no-repeat bg-center flex justify-center md:justify-end ">
        <div data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="700" class=" md:absolute md:mr-10  px-10 pb-7 pt-5 bg-[#222222] bg-opacity-80 w-[32rem]  md:mt-[-8rem] text-white font-philosoph flex-col items-center ">
            <h2 class="text-center text-[1.2rem] mb-2">Explore Our Sites</h2>
            <div class="select">
                <h3>Cafe Menu</h3>
                <p>A cafe menu typically features a range of hot and cold beverages, such as coffee, tea, and specialty drinks like lattes, cappuccinos, and iced coffees. In addition to drinks, cafes often offer a selection of food items, such as pastries, sandwiches, salads, and soups.</p>
            </div>
            <div class="select">
                    <h3>Catering Info</h3>
                    <p>A cafe menu typically features a range of hot and cold beverages, such as coffee, tea, and specialty drinks like lattes, cappuccinos, and iced coffees. In addition to drinks, cafes often offer a selection of food items, such as pastries, sandwiches, salads, and soups.</p>
                </div>
            <div class="select">
                    <h3>Reservation</h3>
                    <p>A cafe menu typically features a range of hot and cold beverages, such as coffee, tea, and specialty drinks like lattes, cappuccinos, and iced coffees. In addition to drinks, cafes often offer a selection of food items, such as pastries, sandwiches, salads, and soups.</p>
            </div>
        </div>
    </div>

</template>
<style>
.select h3 {
    @apply text-[1.2rem] mb-2;
}
.select p {
    @apply text-[0.8rem];
}
.select {
    @apply p-3 hover:bg-[#494949] cursor-pointer border-dotted border-b-2 border-white;
}
</style>
<script>

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {

    mounted() {
        AOS.init();
    }
};

</script>
