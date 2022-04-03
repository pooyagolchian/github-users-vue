<template>
  <div class="container pt-5 pb-5">
    <div v-if="isLoadingState" class="page-center">
      <SVGLoader />
    </div>
    <div
      v-if="!users || (Object.keys(users).length === 0 && !isLoadingState)"
      class="page-center flex-column"
    >
      <div class="fs-2" data-testid="no-user-title">
        NO USER! <i class="lnr lnr-users" />
      </div>

      <div class="cursor-pointer mb-3 fs-4" @click="handleRefresh">
        <i class="lnr lnr-redo" data-testid="refresh-link" /> Refresh
      </div>
    </div>
    <div>
      <div class="container">
        <div class="col col-12 px-5 py-5">
          <router-link to="/">
            <div class="cursor-pointer mb-3 fs-4" data-testid="back-home-btn">
              <i class="lnr lnr-arrow-left" /> Back to home
            </div>
          </router-link>
          <UserCard :users="users" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import SVGLoader from '@/components/SVGLoader'

export default {
  components: { SVGLoader, UserCard },
  computed: {
    users() {
      return this.$store.state.users
    },
    isLoadingState() {
      return this.$store.state.isLoading
    },
  },
  methods: {
    handleRefresh() {
      window.location.reload()
    },
  },
  async mounted() {
    await this.$store.dispatch('setLoading', true)
    await this.$store.dispatch('getUsers')
    await this.$store.dispatch('setLoading', false)
  },
}
</script>
