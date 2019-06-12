<template>
    <div>
        <h1>Category</h1>
        {{$categories}}

        <div v-for="category of $categories.list">
            {{category.name}}
        </div>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$categories)
    }
}
</script>

