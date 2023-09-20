<script>
    import {onMount} from "svelte";
    import {findUser, getCommentsByPost} from "$lib/api.js";

    let comments = false
    export let post
    let user, commentData
    onMount(async () => {
        user = (await findUser(post.userId)).data
        commentData = (await getCommentsByPost(post.id)).data
        console.log({post, user, commentData})
    })
</script>
{#if user && commentData}
    <article sxClass="post">
        <div sxClass="top_post">
            <img src="/favicon.png" alt="" width="64">
            <p>{user.firstName}</p>
        </div>
        <img sxClass="mainImg"
             src={post.imgUrl} alt="">
        <div sxClass="top_bottom">
            <p>
                {post.content}
            </p>
            <div sxClass="icons">
                <p>likes:24</p>
                <button sxClass="commentButton" on:click={()=>comments=!comments}>comments</button>
            </div>
            {#if comments}
                <ul sxClass="comments">
                    {#each commentData as comment}
                        <li sxClass="comment">{comment.content}</li>
                    {/each}
                </ul>
            {/if}
        </div>

    </article>
{/if}
