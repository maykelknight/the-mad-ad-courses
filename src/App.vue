<template>
    <div id="app">
        <Navbar></Navbar>
        <Banner></Banner>
        <Services></Services>
        <CourseDates></CourseDates>
        <Advantages></Advantages>
        <Team></Team>
        <Contact></Contact>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services"
import CourseDates from "./components/CourseDates"
import Advantages from "./components/Advantages"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default {
    name: 'app',
    components: {
        Services,
        Banner,
        Navbar,
        CourseDates,
        Advantages,
        Team,
        Contact,
        Footer,
    }
}
</script>

<style lang="scss">
    @import 'assets/styles/vendors/bootstrap.css';
    @import 'assets/styles/main.scss';
</style>
