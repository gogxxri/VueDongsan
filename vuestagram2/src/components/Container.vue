<template>
    <main class="scroll-container">
        <div class="scroll-content" @scroll="handleScroll">
            <div class="main-section" v-for="(posting, i) in postingData" :key="i">
                <div class="main-userInfo">
                    <div class="user-image" :style="{ backgroundImage: `url(${posting.userImage})` }"></div>
                    <div class="user-name">{{ posting.name }}</div>
                </div>
                <div class="posting-image" :class="posting.filter">
                    <img :src="posting.postImage" />
                </div>
                <div class="posting-content">
                    <div>{{ posting.date }}</div>
                    <div>{{ posting.content }}</div>
                </div>
                <div>
                    <div class="likes">❤ {{ posting.likes }}</div>
                </div>
            </div>
            <div v-if="isLoading" class="loading">Loading...</div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'containerComponent',
    data() {
        return {
            isLoading: false,
        }
    },
    methods: {
        loadMore() {
            if (this.isLoading) return;
            this.isLoading = true;
            this.$store.dispatch('getMoreData')
                .finally(() => {
                    this.isLoading = false;
                });
        },
        handleScroll(event) {
            const container = event.target;
            const bottom = container.scrollHeight === container.scrollTop + container.clientHeight;
            if (bottom && !this.isLoading) {
                this.loadMore();
            }
        }
    },
    computed: {
        postingData() {
            return this.$store.state.postingData;
        }
    },
    mounted() {
        this.$store.dispatch('getPostingData');
    }
}
</script>

<style>
.scroll-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.scroll-content {
    height: 100%;
    overflow-y: scroll; /* 실제 컨텐츠에만 스크롤 바를 적용 */
}

.scroll-content::-webkit-scrollbar {
    display: none; /* 웹킷 기반 브라우저에서 스크롤 바를 숨김 */
}

.main-section {
    margin-bottom: 1rem; 
}

.main-userInfo {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
}

.user-image {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.user-name {
    text-align: center;
    align-content: center;
}

.posting-image img {
    width: 100%;
}

.posting-content {
    padding: 1rem 0;
}

.likes {
    text-align: right;
}

.loading {
    text-align: center;
    padding: 1rem;
}
</style>
