<template>
    <div class="container">
        <div class="contact-section">
            <h2>LET’S TALK TOGETHER</h2>
            <div class="row">
                <div class="col-md-8">
                    <form data-name="Email Form" id="email-form" method="post" name="email-form" class="contact-form">
                        <div class="flex mb30">
                            <input id="form-name"
                                   maxlength="256"
                                   name="Imie"
                                   placeholder="Imię"
                                   required="required"
                                   type="text"
                                   class="form-input mr30">
                            <input id="form-email"
                                   maxlength="256"
                                   name="Email"
                                   placeholder="Email"
                                   type="email"
                                   class="form-input">
                        </div>
                        <textarea data-name="Tekst"
                                  id="form-text"
                                  maxlength="5000"
                                  name="Tekst"
                                  placeholder="Jakie szkolenia Cię interesują?"
                                  required="required"
                                  class="form-input text-area">
                        </textarea>
                        <input data-wait="Please wait..." id="submitBtn" type="button" class="btn submit-btn" value="WYŚLIJ WIADOMOŚĆ">
                    </form>
                </div>
                <div class="col-md-3 col-md-offset-1">
                    <div class="contact-item">
                        <div class="contact-item__label">NUMER KONTAKTOWY</div>
                        <div class="divider"></div>
                        <div class="contact-item__value">785 45 45 47</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item__label">EMAIL</div>
                        <div class="divider"></div>
                        <div class="contact-item__value">hello@themadad.pl</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item__label">SOCIAL</div>
                        <div class="divider"></div>
                        <div class="contact-item__value">
                            <div class="social-icons">
                                <img alt="facebook-logo" class="facebook-logo" src="../assets/images/facebook.svg">
                                <img alt="instagram-logo" class="instagram-logo" src="../assets/images/instagram.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "Contact.vue"
}
</script>

<style scoped lang="scss">
    .contact-section {
        height: 200px;
        margin-top: 196px;

        h2 {
            font-weight: bold;
            font-size: 80px;
            text-align: center;
            letter-spacing: -2.35294px;
            text-transform: uppercase;
            margin-bottom: 84px;
            line-height: 1;
        }

        .contact-form {
            .flex {
                display: flex;
            }

            ::placeholder {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 24px;
                color: $c-gray3
            }

            .form-input {
                overflow: visible;
                flex: 0 auto;
                display: block;
                width: 100%;
                height: 48px;
                padding: 8px 12px;
                font-size: 14px;
                line-height: 1.428571429;
                color: #333333;
                vertical-align: middle;
                border: 1px solid #cccccc;



                &.text-area {
                    min-height: 280px;
                }



            }
            .submit-btn {
                margin-top: 24px;
            }
        }

        .contact-item {
            font-size: 16px;
            line-height: 24px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 40px;

            &__label {
                color: $c-secondary;
            }

            .divider {
                margin: 20px 0;
            }

            .social-icons {
                display: flex;

                .facebook-logo {
                    margin-right: 30px;
                }
            }
        }

    }
</style>
