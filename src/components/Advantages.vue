<template>
    <div class="advantages-wrapper">
        <div class="gradient-border"></div>
        <div class="advantages">
            <div class="container">
                <div class="advantages__description__wrapper">
                    <div class="advantages__description">
                        <h5 class="advantages__description__title">
                            Dlaczego warto szkolić się u nas?
                        </h5>
                        <ul>
                            <li>szkolimy w małych grupach szkoleniowych (maksymalnie do 5 osób),</li>
                            <li>podczas szkolenia odwołujemy się do przykładów z konkretnych branż uczestników szkolenia,</li>
                            <li>zaproponujemy Ci pomysły do wykorzystania na Twoim biznesowym profilu i krok po kroku wyjaśnimy, jak je zrealizować,</li>
                            <li>będziemy wspierać Cię w Twoich działaniach w social mediach przez miesiąc po zakończeniu szkolenia.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="gradient-border"></div>
    </div>
</template>

<script>
export default {
    name: "Advantages"
}
</script>

<style scoped lang="scss">

    .advantages-wrapper {
        margin-bottom: 100px;
    }

    .advantages {
        background: $c-gray-dark;
        height: 561px;
        display: flex;
        align-items: center;
        justify-content: center;

        &__description {

            margin-top: 30px;

            &__wrapper {
                max-width: 650px;
                margin: 0 auto;
            }

            &__title {
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                display: flex;
                align-items: center;
                letter-spacing: -0.882353px;
                text-transform: uppercase;
                margin-bottom: 56px;
            }

            ul {
                padding: 0;
                margin: 0;
                list-style-type: none;
                font-style: normal;
                font-weight: bold;


                li {
                    display: flex;
                    margin-bottom: 36px;
                    font-size: 18px;

                    &:before {
                        content: "• ";
                        color: $c-secondary;
                        font-size: 20px;
                        margin-right: 10px;
                    }
                }

            }
        }

    }

    .gradient-border {
        height: 4px;
        width: 100%;
        background: linear-gradient(270deg, $c-primary, $c-secondary);
        z-index: 0;
        position: relative;
    }

    @media (max-width: $b-xl) {
        .advantages {
            height: auto
        }
    }

    @media (max-width: $b-sm) {
        .advantages {
            &__description {
                margin-top: 30px;

                &__title {
                    text-align: center;
                }

                &__wrapper {
                    height: auto;
                }
            }
        }
    }
</style>
