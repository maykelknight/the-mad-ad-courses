<template>
    <div class="container course-dates" id="course-dates">
        <h3>TERMINY NAJBLIŻSZYCH SZKOLEŃ</h3>
        <div class="divider"></div>
        <div class="row row-eq-height">
            <div class="col-md-4" v-for="(course, index) in upcomingCourses"

            >
                <div class="course-box" data-aos="fade-down" :data-aos-delay="index*200">
                    <div class="course-box__title">{{course.date}}</div>
                    <div class="course-box__location">{{course.location}}</div>
                    <div class="course-box__description">
                        {{course.description}}
                    </div>
                    <div class="course-box__button">
                        <button class="btn" v-if="course.availability">
                            <a href="#contact">Zarezerwuj miejsce</a>
                        </button>
                        <p v-else>BRAK WOLNYCH MIEJC!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CourseDates",
    props: {
        upcomingCourses: Array
    }
}
</script>

<style scoped lang="scss">
    .course-dates {
        padding-top: 100px;

        .divider {
            margin-top: 45px;
            margin-bottom: 70px;
        }

        .course-box {
            border: 10px solid #373634;
            text-align: center;
            min-height: 460px;
            padding: 0 25px;
            margin-bottom: 30px;

            &__title {
                font-weight: bold;
                font-size: 24px;
                line-height: 27px;
                margin-top: 46px;
                margin-bottom: 25px;
            }

            &__location {
                font-weight: bold;
                font-size: 18px;
                line-height: 16px;
                color: $c-secondary;
            }

            &__description {
                font-size: 15px;
                line-height: 24px;
                text-align: center;
                color: $c-gray;
                margin-top: 32px;
                margin-bottom: 60px;
            }

            &__button {
                padding-bottom: 20px;

                p {
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 16px;
                    text-align: center;
                    text-transform: uppercase;
                    color: #F39B37;
                    padding-top: 15px;
                }
            }
        }
    }

    @media (max-width: $b-lg) {
        .course-dates {
            .course-box {
                margin-top: 50px;
            }
        }
    }

    @media (max-width: $b-sm) {
        .course-dates {

        }
    }
</style>
