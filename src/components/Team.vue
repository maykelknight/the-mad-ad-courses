<template>
    <div class="container">
        <div class="row box-background">
            <div class="team-members-wrapper">
                <div class="team-member">
                    <div class="team-member__photo">
                        <img alt="team-member" src="../assets/images/daria.png">
                    </div>
                    <div class="team-member__description">
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
                        <div class="team-member__description__wrapper">
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
                    <div class="team-member__photo">
                        <img alt="team-member" src="../assets/images/magda.png">
                    </div>
                </div>

                <div class="team-member">
                    <div class="team-member__photo">
                        <img alt="team-member" src="../assets/images/róża.png">
                    </div>
                    <div class="team-member__description">
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

    .box-background {
        border: 10px solid $c-gray2;
        width: 800px;
        margin: 0 auto;
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

</style>
