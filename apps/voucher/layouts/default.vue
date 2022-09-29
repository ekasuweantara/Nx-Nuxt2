<template>
    <the-main>
        <nuxt />
    </the-main>
</template>

<script>
import TheMain from 'libs/layout/src/lib/TheMain'

export default {
    components: {
        TheMain
    }
}
</script>

<style>
#__nuxt{
    overflow-x: hidden;
}
</style>