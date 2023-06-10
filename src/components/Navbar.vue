<script>
import { parseStringStyle } from '@vue/shared';


export default {
    data() {
        return {
            mobile: false,
            scrolled: false,
            windowWidth: false,
            mobileNav: false,
            activePage: false,
            scrollPosition: 0
        }
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        onScroll() {
           this.scrollPosition = window.scrollY
        }


    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();



    },
    mounted() {
        const links = document.querySelectorAll('li a')
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach((link) => {
                    link.classList.remove('active');
                });
                e.preventDefault();
                link.classList.add('active');
            });
        });
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        
    }
}

</script>

<template>
    <nav :class="{ 'navbar-color': scrollPosition > 50 || mobile}" class=" z-50 duration-200 sticky  font-philosoph w-[100vw] h-[3.8rem] top-0
        flex items-center justify-between text-white shadow-xl
        ">

         <h2 class="  font-coffee text-[2rem] text-white ml-20">
            KOPI MUD
         </h2>

        <ul v-show="!mobile"
            class=" flex justify-around w-[50%] lg:w-[40%] mr-10 uppercase text-[0.9rem] font-semibold ">
            <li><a href="/">Home</a></li>
            <li><a href="/what">What</a></li>
            <li><router-link class="" to="/#location">Kontak</router-link></li>
            <li> <router-link to="/#instagram">Tentang</router-link> </li>
        </ul>

        <svg @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }"  class="  transition-all duration-200 w-10 mr-5 "
             v-show="mobile" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </nav>
    <transition name="slide-fade">
        <ul id="dropdownNav"
            class=" fixed w-[50vw] z-40 top-10 text-white pt-8 pb-4 bg-[#245953] flex flex-col gap-2 font-philosoph items-center text-[1rem] "
            v-show="mobileNav">
            <li>Beranda</li>
            <li>Penawaran</li>
            <li><router-link class="" to="/#location">Kontak</router-link></li>
            <li><router-link to="/#instagram">Tentang</router-link></li>
        </ul>
    </transition>
</template>
<style>
#dropdownNav li {
    @apply hover:bg-white hover:text-black w-[80%] rounded-lg text-center py-4 uppercase;
}

.icon-active {
    @apply rotate-180 transition-all duration-200;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translatey(20px);
    opacity: 0;
}

.navbar-color {
    @apply bg-[#245953];
}
.navbar-transparent {
    @apply bg-opacity-0;
}
.router-link-active:focus,
.router-link-exact-active:focus {
    @apply text-black bg-white p-5;  
}
</style>