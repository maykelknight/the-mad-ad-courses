<template>
    <div class="container" id="contact-section">
        <div class="contact-section">
            <h2 data-aos="fade-up">LET’S TALK TOGETHER</h2>

            <div class="row">
                <div class="col-md-8">
                    <form data-name="Email Form"
                          id="email-form"
                          method="post"
                          name="email-form"
                          class="contact-form"
                    >
                        <div class="flex">

                                <input id="form-name"
                                       v-model="name"
                                       maxlength="256"
                                       name="name"
                                       placeholder="Imię"
                                       required="required"
                                       type="text"
                                       class="form-input mr30 mb30"
                                       :class="nameFieldEmpty ? 'field-error' : ''"
                                >


                                <input id="form-email"
                                       maxlength="256"
                                       name="Email"
                                       v-model="email"
                                       placeholder="Email"
                                       type="email"
                                       pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                       class="form-input mb30"
                                       :class="emailFieldEmpty ? 'field-error' : ''"
                                       required
                                       @input="validateEmail"
                                >



                        </div>

                        <textarea data-name="Tekst"
                                  id="form-text"
                                  maxlength="5000"
                                  name="Tekst"
                                  v-model="description"
                                  placeholder="Jakie szkolenia Cię interesują?"
                                  required="required"
                                  class="form-input text-area"
                                  :class="descriptionEmpty ? 'field-error' : ''"
                        >
                        </textarea>

                        <input data-wait="Przesyłanie..."
                               id="submitBtn" type="button"
                               class="btn submit-btn"
                               value="WYŚLIJ WIADOMOŚĆ"
                               @click="validateForm"
                        >

                        <div class="form-message" v-if="messageSent">
                            Dziękujemy! Twoja wiadomość została pomyślnie dostarczona.
                        </div>

                        <div class="form-message -error" v-if="emptyFields">
                            Coś poszło nie tak! Proszę wypełnić wszystkie obowiązkowe pola.
                        </div>

                        <div class="form-message -error" v-if="formSendError">
                            Wystąpił problem z wysłaniem wiadomości przez formularz.
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
import axios from 'axios';

export default {
    name: "Contact.vue",
    data () {
        return {
            errors: [],
            name: '',
            email: '',
            description: '',
            emptyFields: false,
            messageSent: false,
            formSendError: false,
        }
    },
    methods: {
        validateForm () {
            this.emptyFields = false;
            this.messageSent = false;
            this.formSendError = false;
            this.errors = [];

            if (this.name === "") {
                this.errors.push('nameEmpty');
            }
            if (this.email === "") {
                this.errors.push('emailEmpty');
            }
            if (this.description === "") {
                this.errors.push('descriptionEmpty');
            }
            if (this.errors.length) {
                this.emptyFields = true;
                return;
            }

            var form = new FormData();
            form.append('subject', 'courses');
            form.append('name', this.name);
            form.append('email', this.email);
            form.append('text', this.description);

            axios.post("../../mailer.php", form)
                .then(response => {
                    this.messageSent = true;
                    this.name = '';
                    this.email = '';
                    this.description = '';
                    console.log('response', response);
                })
                .catch(e => {
                    this.formSendError = true;
                    console.log('error', error);
                })
        },
        // validateEmail (email) {
        //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return
        //     if(re.test(String(email).toLowerCase()))
        // };
    },
    computed: {
        nameFieldEmpty () {
            return this.errors.includes('nameEmpty') && !this.name;
        },
        emailFieldEmpty () {
            return this.errors.includes('emailEmpty') && !this.email;
        },
        descriptionEmpty () {
            return this.errors.includes('descriptionEmpty') && !this.description;
        }
    }
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

            .field-error {
                border: 2px solid #ff6161;
                background-color: #ffdede;
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
