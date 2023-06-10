<script>

import Navbar from '../components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Story from '../components/Story.vue';
import Explore from '../components/Explore.vue';
import Location from '../components/Location.vue';
import Instagram from '../components/Instagram.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Navbar,
        Hero,
        Story,
        Explore,
        Location,
        Instagram,
        Footer
    },
};
</script>
<template>
    <Navbar />
    <Hero />
    <Story />
    <Explore />
    <Location />
    <Instagram />
    <Footer />
</template>

<style>
body {
    background-color: #245953;
}
</style>