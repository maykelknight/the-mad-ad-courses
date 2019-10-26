<template>
    <div class="container team-section" id="team">
        <h3>POZNAJ NASZE PROWADZĄCE</h3>
        <div class="divider"></div>

        <div class="row box-background">

            <div class="team-members-wrapper">

                <div class="team-member" v-for="(trainer, index) in trainers"
                     :class="{'-right': index % 2 === 1}"
                >
                    <div class="team-member__photo" data-aos="fade-left">
                        <img alt="team-member" :src="trainer.photo">
                    </div>
                    <div class="team-member__description" data-aos="fade-right">
                        <div class="team-member__description__wrapper">
                            <p class="team-member__description__name">
                                {{trainer.name}} {{trainer.surname}}
                            </p>

                            <p class="team-member__description__position">
                                {{trainer.position}}
                            </p>
                            <p class="team-member__description__details" v-html="trainer.description">
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
    name: "Team",
    props: {
        trainers: Array
    }
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
                    flex-direction: column;

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
