<template>
    <div id="app">
        <Navbar></Navbar>
        <Banner></Banner>

        <Services :description="servicesList.description"
                  :services="servicesList.services">
        </Services>

        <CourseDates></CourseDates>
        <Testimonials></Testimonials>
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
import Testimonials from "./components/Testimonials"

import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const client = contentful.createClient({
    space: "92abtkis4brm",
    accessToken: "fqa48qDmAT36Fed10Uq_93MbU6S5l0oK-voQ9aKXSJY"
});

export default {
    name: 'app',
    data() {
        return {
            servicesList: {
                description: '',
                services: []
            },
            contentfulRichTextOptions: {
                renderNode: {
                    'embedded-asset-block': (node) =>
                        `<img class="img-fluid" src="${node.data.target.fields.file.url}"/>`
                }
            }
        }
    },
    mounted() {
        this.parseServicesList();
        this.parseUpcomingCourses();
    },
    methods: {
        parseUpcomingCourses() {
            client.getEntries({content_type: 'upcominCourses'}).then(response => {
                const fields = response.items[0].fields;
                console.log('response', fields);
                const upcomingCourses = fields.upcomingCourses.map(service => {
                    return {
                        availability: service.fields.availability,
                        date: service.fields.date,
                        pricing: service.fields.pricing,
                        icon: this.getFileLink(service.fields.icon),
                        description: documentToHtmlString(service.fields.description, this.contentfulRichTextOptions)
                    };
                });

                this.servicesList = parsedResponse;
            });
        },
        parseServicesList() {
            client.getEntries({content_type: 'servicesList'}).then(response => {
                const fields = response.items[0].fields;
                let parsedResponse = {};
                parsedResponse.description = fields.description.content[0].content[0].value;
                parsedResponse.services = fields.service.map(service => {
                    return {
                        description: service.fields.description,
                        label: service.fields.label,
                        pricing: service.fields.pricing,
                        icon: this.getFileLink(service.fields.icon),
                        additionalDescription: documentToHtmlString(service.fields.additionalDescription, this.contentfulRichTextOptions)
                    };
                });

                this.servicesList = parsedResponse;
            });
        },
        getFileLink(content) {
            return content.fields.file.url;
        }
    },
    components: {
        Services,
        Banner,
        Navbar,
        CourseDates,
        Advantages,
        Team,
        Contact,
        Footer,
        Testimonials,
    }
}
</script>

<style lang="scss">
    @import 'assets/styles/vendors/bootstrap.css';
    @import 'assets/styles/main.scss';
</style>
