<template>
    <div class="footer">
        <div class="logo">
            <img alt="mad-ad-logo" src="../assets/images/logo.svg">
        </div>
        <div class="copyright">
            <p>© 2019 - All Rights Reserved The Mad Ad</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
    .footer {
        margin-top: 164px;

        &:before {
            content: '';
            display: block;
            height: 2px;
            width: 100%;
            background: linear-gradient(270deg, $c-primary , $c-secondary);
        }

        .logo {
            height: 286px;
            background: $c-gray-dark;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;

            img {
                width: 400px;
            }
        }

        .copyright {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            p {
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                text-align: center;
            }
        }
    }
</style>
