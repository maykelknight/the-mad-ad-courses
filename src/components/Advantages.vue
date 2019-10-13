<template>

    <div class="advantages-wrapper">
        <div class="gradient-border"></div>
        <div class="advantages">
            <div class="container">
                <div class="row row-no-gutters">
                    <div class="col-md-5">
                        <div class="box with-gradient">
                            <img alt="question-marks-icon" src="../assets/images/question-marks.svg">
                        </div>
                    </div>
                    <div class="col-md-7">
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
        margin-bottom: 200px;
    }
    .advantages {
        background: $c-gray-dark;
        height: 561px;

        &__description {
            margin-left: 20px;

            &__wrapper {
                height: 561px;
                display: flex;
                align-items: center;
                justify-content: center;
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
                        color: $c-secondary; /* or whatever color you prefer */
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

    .box {
        width: 440px;
        height: 742px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        position: relative;
        transform: translateY(-90px);
    }

</style>
