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
