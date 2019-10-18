<template>
    <div class="container team-section" id="team-section">
        <h3>POZNAJ NASZE PROWADZĄCE</h3>
        <div class="divider"></div>

        <div class="row box-background">

            <div class="team-members-wrapper">

                <div class="team-member">
                    <div class="team-member__photo" data-aos="fade-left" >
                        <img alt="team-member" src="../assets/images/daria.png">
                    </div>
                    <div class="team-member__description"  data-aos="fade-right"  >
                        <div class="team-member__description__wrapper">
                            <p class="team-member__description__name">
                                Daria Śliż
                            </p>

                            <p class="team-member__description__position">
                                Co-founder at The Mad Ad
                            </p>
                            <p class="team-member__description__details">
                                Specjalizuje się w kreatywnym planowaniu i wdrażaniu strategii obecności w social mediach oraz optymalizacji kampanii reklamowych online. Z pasją odkrywa tajniki z
                                zakresu psychologii sprzedaży i marketingu, a potem sprytnie wykorzystuje je w komunikacji z konsumentem. Wulkan energii. Myśli szybko, jeszcze szybciej realizuje to, co
                                wymyśliła. Pomysły nie mieszczą się w jej głowie, co tłumaczy burzę loków.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="team-member -right">
                    <div class="team-member__description">
                        <div class="team-member__description__wrapper"  data-aos="fade-left" >
                            <p class="team-member__description__name">
                                Magdalena Nykiel
                            </p>
                            <p class="team-member__description__position">
                                Co-founder at The Mad Ad
                            </p>
                            <p class="team-member__description__details">
                                Facebook, Instagram i inne takie nie mają przed nią tajemnic. Specjalistka od niestandardowych akcji reklamowych. Z przyjemnością planuje i skutecznie realizuje kampanie
                                reklamowe w social mediach, redaguje content, zarządza społecznościami. Czego nie robi? Nie owija w bawełnę. Książkoholiczka.
                                Jest w stanie wydać ostatnie oszczędności na książki, dlatego lepiej nie pożyczać jej pieniędzy, gdy stoi przed księgarnią.
                            </p>
                        </div>
                    </div>
                    <div class="team-member__photo" data-aos="fade-right" >
                        <img alt="team-member" src="../assets/images/magda.png">
                    </div>
                </div>

                <div class="team-member">
                    <div class="team-member__photo" data-aos="fade-left" >
                        <img alt="team-member" src="../assets/images/róża.png">
                    </div>
                    <div class="team-member__description" data-aos="fade-right">
                        <div class="team-member__description__wrapper">
                            <p class="team-member__description__name">
                                Róża Klimczak
                            </p>
                            <p class="team-member__description__position">
                                Marketing Manager at The Mad Ad
                            </p>
                            <p class="team-member__description__details">
                                Pisze odkąd pamięta. Kiedyś kredkami po ścianie, później wiersze, dzisiaj do sieci. Woli, gdy przecinki stoją na swoim miejscu, a słowa kluczowe nie gryzą.
                                Doktor nauk humanistycznych, językoznawca. Bez względu na swoje dzisiejsze plany, jest w stanie upiec na jutro brownie z wiśniami.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Team"
}
</script>

<style scoped lang="scss">

    .team-section {
        padding-top: 100px;
        margin-bottom: 96px;
    }
    .box-background {
        border: 10px solid $c-gray2;
        max-width: 800px;
        margin: 0 auto;
    }

    .divider {
        margin-top: 45px;
        margin-bottom: 100px;
    }

    .team-members-wrapper {
        margin: 20px 0;

        .team-member {
            position: relative;
            height: 455px;
            width: 100%;

            &__photo {
                img {
                    position: absolute;
                    left: -180px;
                }
            }

            &__description {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 415px;
                height: 455px;
                max-width: 150px;

                &__name {
                    font-weight: bold;
                    font-size: 40px;
                    line-height: 27px;
                    margin-bottom: 24px;
                }

                &__position {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 16px;
                    color: $c-secondary;
                    margin-bottom: 35px;
                }

                &__details {
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 24px;
                    color: $c-gray;
                    width: 600px;
                }
            }


            &.-right {
                .team-member__photo {
                    position: absolute;
                    right: -55px;
                }

                .team-member__description {
                    position: absolute;
                    text-align: right;
                    left: 215px;
                }
            }
        }
    }

    @media (max-width: $b-xl) {
        .team-members-wrapper {
            height: auto;

            .team-member {
                height: initial;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;

                &__photo {
                    img {
                        position: initial;
                        width: 100%;
                    }
                }

                &__description {
                    position: initial;
                    max-width: initial;
                    height: auto;
                    padding: 0 20px;

                    &__name {
                        line-height: 50px;
                    }
                    &__details {
                        width: 100%;
                        max-width: 600px;
                    }
                }


                &.-right {
                    flex-direction: column-reverse;

                    .team-member__photo {
                        position: relative;
                        right: 0;

                        img {
                            position: initial;
                            width: 100%;
                        }
                    }

                    .team-member__description {
                        text-align: center;
                        position: initial;
                        max-width: initial;
                    }
                }


            }
        }
    }

</style>
