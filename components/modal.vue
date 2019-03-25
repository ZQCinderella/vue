<template>
    <div class="mask" @click="onCancel">
        <div class="modal-container">
            <div class="modal-body">
                <span>这是弹框组件</span>
            </div>
            <div class="modal-footer">
                <div class="modal-btn left" v-if="cancel" @click.stop="onCancel">1</div>
                <div class="modal-btn right" :class="{'only-confirm': !cancel}" v-if="confirm" @click.stop="onConfirm">2</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .mask{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        background: rgba(0,0,0,.5);

        .modal-container{
            width: 400px;
            // height: 400px;
            border-radius: 30px;
            background: #fff;
            z-index: 10000;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .modal-body{
                display: flex;
                padding: 44px 32px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .modal-footer{
                display: flex;
                line-height: 66px;
                border-top: 1px solid #ccc;
                .modal-btn{
                    flex: 1;
                    height: 66px;
                    text-align: center;
                }
                .left, .only-confirm{
                    border-bottom-left-radius: 30px;
                }
                .right{
                    border-bottom-right-radius: 30px;
                    background: #1890ff;
                    color: #fff;
                }
            }
        }
    }
</style>
