<template>
    <div class="testimonials">


        <h3>KILKA SŁÓW OD NASZYCH KLIENTÓW</h3>
        <div class="divider"></div>

        <div class="testimonials-slider-wrapper" data-aos="zoom-in">
            <img alt="chevron-icon-left"
                 class="chevron -left"
                 src="../assets/images/chevron-right.svg"
                 @click="previousSlide()"
            >
            <img alt="chevron-icon-right"
                 class="chevron -right"
                 src="../assets/images/chevron-right.svg"
                 @click="nextSlide()"
            >

            <tiny-slider :mouse-drag="true"
                         loop
                         items="1"
                         gutter="20"
                         ref="tinySlider"
                         autoplay

            >
                <div class="testimonial">
                    <div class="testimonial__details">
                        <img alt="testimonial-image" class="testimonial__details__logo" src="../assets/images/Kamuglafe.png">
                        <p class="testimonial__details__description">
                            "Wiedza ze szkoleń, już po kilku dniach od zastosowania pozwoliła uzyskać realną poprawę w wynikach wszystkich kampanii, które prowadzimy.
                            Wiedza jest przekazywana w bardzo zrozumiały sposób, a Pani Daria zawsze cierpliwie odpowiada na wszystkie pytania z naszej strony."
                        </p>
                        <p class="testimonial__details__person">Paweł Raj</p>
                        <p class="testimonial__details__company">KAMUFLAGE</p>
                    </div>
                    <div class="border"></div>
                </div>
                <div class="testimonial">
                    <div class="testimonial__details">
                        <img alt="testimonial-image" class="testimonial__details__logo" src="../assets/images/Kamuglafe.png">
                        <p class="testimonial__details__description">
                            "Wiedza ze szkoleń, już po kilku dniach od zastosowania pozwoliła uzyskać realną poprawę w wynikach wszystkich kampanii, które prowadzimy.
                            "Wiedza ze szkoleń, już po kilsDaria zawsze cierpliwie odpowiada na wszystkie pytania z naszej strony."
                        </p>
                        <p class="testimonial__details__person">Paweł Raj</p>
                        <p class="testimonial__details__company">KAMUFLAGE</p>
                    </div>
                    <div class="border"></div>
                </div>
            </tiny-slider>
        </div>


    </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';


export default {
    name: "Testimonials",
    components: {
        'tiny-slider': VueTinySlider
    },
    methods: {
        nextSlide () {
            this.$refs.tinySlider.slider.goTo('next')
        },
        previousSlide () {
            this.$refs.tinySlider.slider.goTo('prev')
        }
    }
}
</script>

<style scoped lang="scss">


    .testimonials {
        height: 1130px;
        background-size: cover;
        background: url('~@/assets/images/Bcq_baloon.jpg') no-repeat 50% 0;
        margin-top: 256px;

        .divider {
            margin-top: 45px;
            margin-bottom: 100px;
        }
    }

    .testimonials-slider-wrapper {
        max-width: 840px;
        margin: 0 auto;
        position: relative;

        .chevron {
            width: 40px;
            cursor: pointer;
            opacity: 0.3;
            transition: opacity 0.4s;
            z-index: 1;

            &:hover {
                opacity: 0.8;
            }

            &.-left {
                transform: rotate(180deg);
                position: absolute;
                bottom: 45%;
                left: 0;
            }

            &.-right {
                position: absolute;
                right: 0;
                bottom: 45%;
            }
        }

        /deep/[data-action="stop"] {
            display: none;
        }

        /deep/ .tns-controls {
            display: none;
        }

        /deep/ .tns-nav {
            position: absolute;
            bottom: -25px;
            z-index: 1;
            left: 0;
            right: 0;
            text-align: center;

            button {
                border-radius: 50%;
                position: relative;
                background-color: rgba(255, 255, 255, 0.4);
                cursor: pointer;
                margin: 0 3px 0.5em;
                display: inline-block;
                width: 16px;
                height: 16px;
                padding: 5px;
                border: 0;
                outline: none;

                &.tns-nav-active {
                    background: #fff;
                }
            }
        }

        .testimonial {

            &__details {
                text-align: center;
                background: url('~@/assets/images/rectangle.svg') no-repeat center;
                max-width: 100%;
                min-height: 400px;

                &__logo {
                    margin-top: 50px;
                    margin-bottom: 32px;
                }

                &__description {
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 24px;
                    color: #969EA7;
                    margin: 0 auto;
                    padding: 0 60px;
                }

                &__person {
                    font-weight: normal;
                    font-size: 22px;
                    text-align: center;
                    margin: 45px 0 0;
                }

                &__company {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    text-align: center;
                    margin: 0;
                }
            }
        }
    }

    @media (max-width: $b-md) {
        .testimonials-slider-wrapper {
            .testimonial {
                &__details {
                    background: none;
                }
            }
        }
    }

    @media (max-width: $b-sm) {
        .testimonials-slider-wrapper {
            .chevron {
                max-width: 30px;
            }
            /deep/ .tns-nav {
                bottom: -50px;
            }
        }
    }
</style>
