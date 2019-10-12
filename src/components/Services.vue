<template>
    <div class="container">
        <div class="service">

            <div class="service-image">
                <img alt="mad-ad-logo" src="../assets/images/service-ico_1.svg">
            </div>

            <div class="service-content">
                <h4 class="service-content__title">
                    FACEBOOK OD PODSTAW
                </h4>
                <div class="service-content__description">
                    <div class="service-content__description__main">
                        Dla tych, którzy chcą promować swoją działalność na Facebooku i nie wiedzą, od czego zacząć.
                    </div>
                    <div class="service-content__description__additional">
                        Przekonamy Cię, że social media mogą być skutecznym narzędziem w budowaniu wizerunku marki, wskażemy, w jaki konkretny sposób mogą pomóc Twojemu biznesowi. Podpowiemy, jak prowadzić profil na Facebooku i jak wykorzystać działania na grupach zamkniętych. Przekażemy Ci podstawy copy- i webwritingu. Do tego przydatna dawka informacji na temat technicznych szczegółów grafik wykorzystywanych do publikacji (wymiary, kolory, rozdzielczości).
                    </div>
                </div>
                <div class="service-content__price">
                    8 h – 900 netto
                </div>
            </div>
        </div>

        <div class="service">
            <div class="service-image">
                <img alt="mad-ad-logo" src="../assets/images/service-ico_2.svg">
            </div>

            <div class="service-content">
                <h4 class="service-content__title">
                    FACEBOOK DLA ZAAWANSOWANYCH
                </h4>
                <div class="service-content__description">
                    <div class="service-content__description__main">
                        Dla tych, którzy chcą rozpocząć planowanie i prowadzenie kampanii reklamowych na Facebooku.
                    </div>
                    <div class="service-content__description__additional">
                        Wyjaśnimy, w czym tkwi sukces skutecznego targetowania, wspólnie przanalizujemy i doprecyzujemy Twoje grupy docelowe. Zaprezentujemy na przykładach, jak tworzyć przyciągające uwagę kreacje, a czego lepiej unikać. Opowiemy z doświadczenia, ile jest warty lajk, a ile wejście na stronę. Pokażemy Ci, jak mądrze wykorzystywać budżet i jak mierzyć efekty swoich działań.                     </div>
                </div>
                <div class="service-content__price">
                    8 h – 1300 netto
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
    name: "Services.vue"
}
</script>

<style scoped lang="scss">

    .service {
        display: flex;
        margin-top: 150px;
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

        &__symbol {
            font-style: normal;
            font-weight: bold;
            font-size: 230px;
            line-height: 278px;
            letter-spacing: -6.76471px;
            color: $c-black;
        }
    }
</style>
