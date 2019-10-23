<template>
    <div class="container" id="services">

        <div class="banner-description">
            <p>{{description}}</p>
        </div>

        <div class="divider"></div>

        <div class="service" v-for="service in services">

            <div class="service-image" data-aos="fade-right">
                <img alt="mad-ad-logo" :src="service.icon">
            </div>

            <div class="service-content" data-aos="fade-left">
                <h4 class="service-content__title">
                    {{service.label}}
                </h4>
                <div class="service-content__description">
                    <div class="service-content__description__main">
                        {{service.description}}
                    </div>
                    <div class="service-content__description__additional" v-html="service.additionalDescription">
                    </div>
                </div>
                <div class="service-content__price">
                    {{service.pricing}}
                </div>
            </div>
        </div>

        <div class="box with-gradient">
            <p class="box__symbol">@</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        services: Array,
        description: String
    },
    name: "Services.vue"
}
</script>

<style scoped lang="scss">

    .service {
        display: flex;
        margin-top: 150px;
    }

    .banner-description {
        margin-top: 84px;

        p {
            font-weight: bold;
            font-size: 24px;
            line-height: 36px;
            text-align: center;
        }
    }

    .service-content {
        margin-left: -75px;
        margin-top: 40px;

        &__title {
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 36px;
            letter-spacing: -0.114286px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        &__description {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: $c-gray;

            &__main {
                margin-bottom: 30px;
            }
        }

        &__price {
            color: $c-secondary;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 36px;
            letter-spacing: -0.0714286px;
            margin-top: 38px;
        }


    }
    .box {
        height: 358px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 165px;
        margin-bottom: 45px;

        &__symbol {
            font-style: normal;
            font-weight: bold;
            font-size: 230px;
            line-height: 278px;
            letter-spacing: -6.76471px;
            color: $c-black;
        }
    }

    @media (max-width: $b-md) {
        .service {
            flex-direction: column;
            margin-top: 60px;

            .service-content {
                margin-left: 0;

                &__title {
                    font-size: 26px;
                }
            }
        }
    }
</style>
