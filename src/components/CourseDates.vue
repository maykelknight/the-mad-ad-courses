<template>
    <div class="container course-dates ">
        <h3>TERMINY NAJBLIŻSZYCH SZKOLEŃ</h3>
        <div class="divider"></div>
        <div class="row">
            <div class="col-md-4">
                <div class="course-box">
                    <div class="course-box__title">29 październik 2019</div>
                    <div class="course-box__location">Miejsce szkolenia</div>
                    <div class="course-box__description">Kilka słów o szkoleniu. Nulla ac egestas odio. Mauris auctor ultrices bibendum. Nunc volutpat, leo et auctor pretium, felis augue dignissim
                        orci, id tempor tortor eros vestibulum justo.
                    </div>
                    <div class="course-box__button">
                        <p>BRAK WOLNYCH MIEJC!</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="course-box">
                    <div class="course-box__title">29 październik 2019</div>
                    <div class="course-box__location">Miejsce szkolenia</div>
                    <div class="course-box__description">Kilka słów o szkoleniu. Nulla ac egestas odio. Mauris auctor ultrices bibendum. Nunc volutpat, leo et auctor pretium, felis augue dignissim
                        orci, id tempor tortor eros vestibulum justo.
                    </div>
                    <div class="course-box__button">
                        <button class="btn">Zarezerwuj miejsce</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="course-box">
                    <div class="course-box__title">29 październik 2019</div>
                    <div class="course-box__location">Miejsce szkolenia</div>
                    <div class="course-box__description">Kilka słów o szkoleniu. Nulla ac egestas odio. Mauris auctor ultrices bibendum. Nunc volutpat, leo et auctor pretium, felis augue dignissim
                        orci, id tempor tortor eros vestibulum justo.
                    </div>
                    <div class="course-box__button">
                        <button class="btn">Zarezerwuj miejsce</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CourseDates"
}
</script>

<style scoped lang="scss">
    .course-dates {
        margin-top: 145px;

        .divider {
            margin-top: 45px;
            margin-bottom: 70px;
        }

        .course-box {
            border: 10px solid #373634;
            text-align: center;
            min-height: 410px;
            padding: 0 25px;

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
                font-weight: normal;
                font-size: 15px;
                line-height: 24px;
                text-align: center;
                color: $c-gray;
                margin-top: 32px;
                margin-bottom: 60px;
            }

            &__button {
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
</style>
