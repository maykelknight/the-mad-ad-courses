<template>
    <section class="container banner">

        <div class="row row-no-gutters">
            <div class="col-md-6">
                <div class="banner-heading-wrapper">
                    <div class="banner-heading">
                        <h1 class="banner-heading__text">
                            Szkolenia z pazurem
                        </h1>
                        <div class="banner-heading__button">
                            <button type="button" class="btn">Wybierz termin szkoleń</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box">
                    <p class="box__text">#be_mad</p>
                </div>
            </div>
        </div>

        <div class="banner-description">
            <p>
                Facebook nie ma przed nami tajemnic. Zajmujemy się planowaniem i wdrażaniem strategii obecności w social mediach oraz prowadzeniem kampanii reklamowych online. Wspieramy firmy w
                tych działaniach i szkolimy z tego zakresu. Proponujemy solidną dawkę wiedzy popartą inspirującymi przykładami oraz umiejętności, które wykorzystasz do promowania własnego biznesu.
            </p>
        </div>

        <div class="divider">

        </div>
    </section>
</template>

<script>
export default {
    name: "Banner.vue"
}
</script>

<style scoped lang="scss">

    .banner {
        margin-top: 75px;

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

        .banner-description {
            margin-top: 184px;

            p {
                font-weight: bold;
                font-size: 24px;
                line-height: 36px;
                text-align: center;
            }
        }

        .box {
            width: 570px;
            height: 570px;
            background: linear-gradient(270deg, $c-primary, $c-secondary);
            display: flex;
            align-items: center;
            justify-content: center;

            &__text {
                font-size: 90px;
                font-weight: 400;
                letter-spacing: -2.647059px;
                color: $c-black;
            }
        }
    }
</style>
