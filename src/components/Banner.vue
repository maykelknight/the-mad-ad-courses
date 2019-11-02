<template>
    <section class="banner-wrapper">
        <div class="container banner">
            <div class="row row-no-gutters banner__main-content">
                <div class="col-md-6 col-sm-6">
                    <div class="banner-heading-wrapper">
                        <div class="banner-heading">
                            <h1 class="banner-heading__text">
                                Szkolenia z pazurem
                            </h1>
                            <div class="banner-heading__button">
                                <button type="button" class="btn">
                                    <a class="btn" href="#course-dates">Wybierz termin szkoleń</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">

                    <div class="logo">

                        <img alt="mad-ad-logo" src="../assets/images/pazur.svg" data-aos="zoom-out-up">
                    </div>

                    <!--                <div class="box" data-aos="zoom-out-up">-->
                    <!--                    <p class="box__text">#be_mad</p>-->
                    <!--                </div>-->
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: "Banner.vue"
}
</script>


<style scoped lang="scss">

    .banner-wrapper {
        background: url('~@/assets/images/pattern.svg');
        background-repeat: no-repeat;
    }

    .banner {
        margin-top: 75px;
        margin-bottom: 100px;

        .banner-heading-wrapper {
            display: flex;
            align-items: center;
            height: 570px;

            .banner-heading {
                &__text {
                    color: #ffffff;
                    font-size: 90px;
                    font-weight: 400;
                    line-height: 106px;
                    text-transform: uppercase;
                    letter-spacing: -2.647059px;
                    width: 500px;
                }

                &__button {
                    margin-top: 37px;
                }
            }
        }


        .logo {
            margin-left: 120px;
            margin-top: -105px;

            img {
                max-width: 622px;
                max-height: 756px;
            }
        }

    }

    @media (max-width: $b-xl) {
        .banner {
            .logo {
                margin-left: 0;
                margin-top: -50px;
                padding: 0 20px;

                img {
                    width: 100%;
                }
            }

            .banner-heading-wrapper {
                height: 370px;

                .banner-heading {
                    &__text {
                        font-size: 50px;
                        width: auto;
                        line-height: 72px;
                    }
                }
            }

            .box {
                width: 370px;
                height: 370px;

                &__text {
                    font-size: 78px;
                }
            }
        }
    }


    @media (max-width: $b-md) {
        .banner-wrapper {
            background-repeat: repeat-y;
        }
        .banner {
            &__main-content {
                display: flex;
                flex-direction: column-reverse;
            }

            .banner-heading-wrapper {
                height: auto;

                .banner-heading {
                    text-align: center;
                    margin: 45px auto 0;
                }
            }

            .box {
                width: 100%;
                height: 200px;

                &__text {
                    font-size: 60px;
                }
            }
        }

    }

</style>
