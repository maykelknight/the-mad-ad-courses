<template>
    <div class="container">
        <div class="nav-wrapper">
            <div class="links-wrapper">
                <div class="logo">
                    <img alt="mad-ad-logo" src="../assets/images/logo.svg">
                </div>
                <ul class="links">
                    <li>Oferta</li>
                    <li>Terminy szkoleń</li>
                    <li>Prowadzące</li>
                    <li>Kontakt</li>
                </ul>
            </div>
            <div class="social-icons pull-right">
                <img alt="facebook-logo" class="facebook-logo" src="../assets/images/facebook.svg">
                <img alt="instagram-logo" class="instagram-logo" src="../assets/images/instagram.svg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar.vue"
}
</script>

<style scoped lang="scss">
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
</style>
