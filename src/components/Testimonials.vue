<template>
    <div class="testimonials">
        <h3>KILKA SŁÓW OD NASZYCH KLIENTÓW</h3>
        <div class="divider"></div>

        <div class="testimonial-slider-wrapper">

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

        </div>

    </div>
</template>

<script>
export default {
    name: "Testimonials"
}
</script>

<style scoped lang="scss">
    .testimonials {
        height: 1130px;
        background: url('~@/assets/images/Bcq_baloon.jpg');
        background-position: 50% 0%;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 256px;

        .divider {
            margin-top: 45px;
            margin-bottom: 100px;
        }

        .testimonial-slider-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            .testimonial {

                &__details {
                    text-align: center;
                    background: url('~@/assets/images/rectangle.svg') no-repeat center;
                    max-width: 700px;
                    height: 400px;

                    &__logo {
                        margin-top: 50px;
                        margin-bottom: 32px;
                    }

                    &__description {
                        font-weight: bold;
                        font-size: 15px;
                        line-height: 24px;
                        color: #969EA7;
                        margin: 0;
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

    }
</style>
