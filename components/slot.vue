<template>
    <div id="slot">
        <header>
            <slot name="view-container"></slot>
        </header>
        <footer>
            <slot></slot>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    header {
        font-size: 30px;
    }
    footer{
        font-size: 25px;
    }
</style>
