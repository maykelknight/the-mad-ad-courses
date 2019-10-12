<template>
    <div id="app">
        <Navbar></Navbar>
        <Banner></Banner>
        <Services></Services>
        <CourseDates></CourseDates>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services"
import CourseDates from "./components/CourseDates"

export default {
    name: 'app',
    components: {
        Services,
        Banner,
        Navbar,
        CourseDates
    }
}
</script>

<style lang="scss">
    @import 'assets/styles/vendors/bootstrap.css';
    @import 'assets/styles/main.scss';
</style>
