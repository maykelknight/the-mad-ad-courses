<template>
    <div id="app">
        <Navbar></Navbar>
        <Banner></Banner>
        <Services :description="servicesList.description"
                  :services="servicesList.services"
        />
        <CourseDates :upcomingCourses="upcomingCourses"/>
        <Testimonials :testimonials="testimonialList"/>
        <Advantages></Advantages>
        <Team :trainers="trainerList"/>
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
import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import dayjs from 'dayjs';
import 'dayjs/locale/pl' // load on demand

const client = contentful.createClient({
    space: "92abtkis4brm",
    accessToken: "fqa48qDmAT36Fed10Uq_93MbU6S5l0oK-voQ9aKXSJY"
});

export default {
    name: 'app',
    data () {
        return {
            facebookMessengerInitialised: false,
            servicesList: {
                description: '',
                services: []
            },
            upcomingCourses: [],
            testimonialList: [],
            trainerList: [],
            contentfulRichTextOptions: {
                renderNode: {
                    'embedded-asset-block': (node) =>
                        `<img class="img-fluid" src="${node.data.target.fields.file.url}"/>`
                }
            }
        }
    },
    mounted () {

        this.parseServicesList();
        this.parseUpcomingCourses();
        this.parseTestimonialList();
        this.parseTrainerList();
    },
    methods: {
        parseTrainerList () {
            client.getEntries({content_type: 'trainerList'}).then(response => {
                const fields = response.items[0].fields;
                console.log('fields', fields);
                const trainers = fields.trainer.map(service => {
                    return {
                        name: service.fields.name,
                        surname: service.fields.surname,
                        position: service.fields.position,
                        description: documentToHtmlString(service.fields.description, this.contentfulRichTextOptions),
                        photo: this.getFileLink(service.fields.photo)
                    };
                });
                this.trainerList = trainers;
            });
        },
        parseUpcomingCourses () {
            client.getEntries({content_type: 'upcominCourses'}).then(response => {
                const fields = response.items[0].fields;
                const upcomingCourses = fields.upcomingCourse.map(service => {
                    return {
                        availability: service.fields.availability,
                        date: dayjs(service.fields.date).locale('pl').format('D MMMM YYYY'),
                        description: service.fields.description,
                        location: service.fields.location
                    };
                });
                this.upcomingCourses = upcomingCourses;
            });
        },
        parseTestimonialList () {
            client.getEntries({content_type: 'testimonialList'}).then(response => {
                const fields = response.items[0].fields;
                const testimonialList = fields.testimonial.map(service => {
                    return {
                        company: service.fields.company,
                        name: service.fields.name,
                        surname: service.fields.surname,
                        logo: this.getFileLink(service.fields.logo),
                        description: documentToHtmlString(service.fields.description, this.contentfulRichTextOptions),
                    };
                });
                this.testimonialList = testimonialList;
            });
        },
        parseServicesList () {
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
        getFileLink (content) {
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
