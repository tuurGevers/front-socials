<script>
    import Pre_post from "$lib/components/Pre_post.svelte";
    import {onMount} from "svelte";
    import {getPosts} from "$lib/api.js";

</script>

{#await getPosts() }
    <p>loading</p>
{:then posts}
    <main sxClass="main">
        {#each posts.data as post}
            <Pre_post {post}/>
        {/each}
    </main>
{/await}
