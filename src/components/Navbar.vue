<template>
    <div class="container">
        <div class="nav-wrapper">
            <div class="links-wrapper">
                <div class="logo">
                    <img alt="mad-ad-logo" src="../assets/images/logo.svg">
                </div>
                <ul class="links">
                    <li>
                        <a href="#services">Oferta</a>
                    </li>
                    <li>
                        <a href="#course-dates">Terminy szkoleń</a>
                    </li>
                    <li>
                        <a href="#team">Prowadzące</a>
                    </li>
                    <li>
                        <a href="#contact">Kontakt</a>
                    </li>
                </ul>
            </div>

            <div class="social-icons pull-right">
                <a href="https://www.facebook.com/agencjathemadad" target="_blank">
                    <img alt="facebook-logo" class="facebook-logo" src="../assets/images/facebook.svg">
                </a>
                <a href="https://www.instagram.com/agencja_themadad/" target="_blank">
                    <img alt="instagram-logo" class="instagram-logo" src="../assets/images/instagram.svg">
                </a>
            </div>

            <div class="hamburger"
                 :class="navLinksVisible ? '-active' : ''"
                 @click="toggleNavLinksVisibility()">
                <div></div>
            </div>

        </div>

        <div class="mobile-navigation">
            <div class="social-icons">
                <img alt="facebook-logo" class="facebook-logo mr15" src="../assets/images/facebook.svg">
                <img alt="instagram-logo" class="instagram-logo" src="../assets/images/instagram.svg">
            </div>
            <ul class="mobile-links" v-if="navLinksVisible">
                <li>
                    <a href="#services">Oferta</a>
                </li>
                <li>
                    <a href="#course-dates">Terminy szkoleń</a>
                </li>
                <li>
                    <a href="#team">Prowadzące</a>
                </li>
                <li>
                    <a href="#contact">Kontakt</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            navLinksVisible: false
        }
    },
    methods: {
        toggleNavLinksVisibility () {
            this.navLinksVisible = !this.navLinksVisible;
        }
    }
}
</script>

<style scoped lang="scss">

    .hamburger {
        display: none;
        margin: 1em;
        width: 40px;
    }

    .hamburger:after,
    .hamburger:before,
    .hamburger div {
        background-color: #fff;
        border-radius: 3px;
        content: '';
        display: block;
        height: 5px;
        margin: 7px 0;
        transition: all .2s ease-in-out;
    }

    .hamburger.-active:before {
        transform: translateY(12px) rotate(135deg);
    }

    .hamburger.-active:after {
        transform: translateY(-12px) rotate(-135deg);
    }

    .hamburger.-active div {
        transform: scale(0);
    }


    .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .links-wrapper {
            display: flex;
            align-items: center;

            .links {
                list-style-type: none;
                display: flex;
                flex-wrap: wrap;

                li {
                    color: white;
                    text-transform: uppercase;
                    font-family: "Inter", 'Inter var', sans-serif;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 27px;
                    margin-right: 45px;

                    a {
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }

        .social-icons {
            display: flex;
            align-items: center;
            justify-content: center;

            .facebook-logo {
                margin-right: 30px;
            }
        }
    }

    .mobile-navigation {
        display: none;

        .mobile-links {
            list-style-type: none;
            text-transform: uppercase;
            padding: 10px 0 0;
            border-top: 1px solid #363636;
            border-bottom: 1px solid #363636;
            margin-bottom: -40px;

            li {
                margin-bottom: 10px;
                font-size: 22px;

                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }

    @media (max-width: $b-md) {
        .hamburger {
            display: block;
        }
        .nav-wrapper {
            .links-wrapper {
                .links {
                    display: none;
                }
            }

            .social-icons {
                display: none;
            }
        }
        .mobile-navigation {
            display: block;
        }
    }
</style>
