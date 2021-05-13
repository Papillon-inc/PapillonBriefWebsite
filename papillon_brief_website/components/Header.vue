<template>
    <div class="header-container">
        <div class="bar">
            <div class="papillon">
            <img src="~/static/image/papillon.png" class="logo" alt="papillon logo" />
            </div>
            <div class="menu">
            <span class="product">Product</span>
            <span class="news">News</span>
            <span class="contact">Contact</span>
            <span class="info">Information</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.header-container {
    .bar {
        position: relative;
        top: 100px;
        left: 50%;

        width: 80%;

        @media screen and (max-width: 600px) {
            top: 10px;
            width: 100%;
            padding-left: 5%;
            z-index: 2;
            background: #fafafa;
        }

        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);

        .papillon {
            .logo {
                position: relative;
                height: 80px;
                width: 80px;

                @media screen and (max-width: 1000px) {
                    width: 48px;
                    height: 48px;
                }

                @media screen and (max-width: 600px) {
                    width: 26px;
                    height: 26px;
                }

            }
        }

        .papillon:after {
            content: "Papillon";
            position: absolute;
            top: 16px;
            margin-left: 5px;

            font-weight: 900;
            font-size: 36px;
            font-family: 'Roboto', sans-serif;
            color: #212121;

            @media screen and (max-width: 1000px) {
                top: 10px;
                font-size: 28px;
            }

            @media screen and (max-width: 600px) {
                top: 6px;
                margin-left: 3px;
                font-size: 12px;
                z-index: 3;
            }
        }

        .menu {
            position: absolute;
            top: 20px;
            right: 5%;
            color: #767676;

            @media screen and (max-width: 1000px) {
                top: 10px;
            }

            @media screen and (max-width: 600px) {
                top: 2px;
            }

            .product {
                position: relative;
                right: 60px;
                font-size: 30px;
                font-weight: 500;
                text-align: right;
                cursor: pointer;

                @media screen and (max-width: 1000px) {
                    right: 36px;
                    font-size: 24px;
                }

                @media screen and (max-width: 600px) {
                    right: 16px;
                    font-size: 12px;
                }
            }

            .news {
                position: relative;
                right: 40px;
                font-size: 30px;
                font-weight: 500;
                text-align: right;
                cursor: pointer;

                @media screen and (max-width: 1000px) {
                    right: 27px;
                    font-size: 24px;
                }

                @media screen and (max-width: 600px) {
                    right: 12px;
                    font-size: 12px;
                }
            }

            .contact {
                position: relative;
                right: 20px;
                font-size: 30px;
                font-weight: 500;
                text-align: right;
                cursor: pointer;

                @media screen and (max-width: 1000px) {
                    right: 18px;
                    font-size: 24px;
                }

                @media screen and (max-width: 600px) {
                    right: 8px;
                    font-size: 12px;
                }
            }

            .info {
            position: relative;
            font-size: 30px;
            font-weight: 500;
            text-align: right;
            cursor: pointer;

            @media screen and (max-width: 1000px) {
                right: 9px;
                font-size: 24px;
            }

            @media screen and (max-width: 600px) {
                right: 4px;
                font-size: 12px;
            }
            }
      }
    }
}
</style>
