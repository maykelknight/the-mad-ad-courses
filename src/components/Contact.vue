<template>
    <div class="container" id="contact-section">
        <div class="contact-section">
            <h2>LET’S TALK TOGETHER</h2>

            <div class="row">
                <div class="col-md-8">
                    <form data-name="Email Form" id="email-form" method="post" name="email-form" class="contact-form">
                        <div class="flex">
                            <input id="form-name"
                                   maxlength="256"
                                   name="Imie"
                                   placeholder="Imię"
                                   required="required"
                                   type="text"
                                   class="form-input mr30 mb30">
                            <input id="form-email"
                                   maxlength="256"
                                   name="Email"
                                   placeholder="Email"
                                   type="email"
                                   class="form-input mb30">
                        </div>
                        <textarea data-name="Tekst"
                                  id="form-text"
                                  maxlength="5000"
                                  name="Tekst"
                                  placeholder="Jakie szkolenia Cię interesują?"
                                  required="required"
                                  class="form-input text-area">
                        </textarea>
                        <input data-wait="Przesyłanie..." id="submitBtn" type="button" class="btn submit-btn" value="WYŚLIJ WIADOMOŚĆ">

                        <div class="form-message">
                            Dziękujemy! Twoja wiadomość została pomyślnie dostarczona.
                        </div>

                        <div class="form-message -error">
                            Coś poszło nie tak! Proszę wypełnić wszystkie obowiązkowe pola.
                        </div>
                    </form>
                </div>
                <div class="col-md-3 col-md-offset-1 contact-items" data-aos="fade-left">
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
        padding-top: 100px;

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

        .form-message {
            background-color: $c-white;
            padding: 20px;
            text-align: center;
            font-family: 'Inter Light', Arial, sans-serif;
            color: #aeb7c1;
            margin-top: 26px;

            &.-error {
                font-family: 'Inter Light', Arial, sans-serif;
                color: #ff6161;
                background-color: #ffdede;
            }
        }
    }
    @media (max-width: $b-lg) {
        .contact-items {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
        }
    }

    @media (max-width: $b-sm) {

        .contact-section {
            h2 {
                font-size: 50px;
            }
            .contact-items {
                display: block;
            }
            .flex {
                flex-direction: column;
            }
        }
    }
</style>
