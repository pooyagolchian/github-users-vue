<template>
  <div class="container pt-5 pb-5">
    <UserCard :users="users" />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
export default {
  components: { UserCard },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  async mounted() {
    await this.$store.dispatch("getUsers");
    console.log(this.$store.state.users);
  },
};
</script>
