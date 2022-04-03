<template>
  <div class="row gx-3 gy-3 card-item">
    <div
      v-for="(user, index) in users"
      :key="index + user.id"
      class="col col-sm-12 col-md-3"
      data-testid="user-card"
    >
      <div class="col col-12 bg-white shadow gy-2 rad rounded-2">
        <div class="col-12">
          <img
            :alt="user.node_id"
            :src="user.avatar_url"
            class="img-fluid card-item-img col-12 card__img ratio-16x9 rounded-top"
          />
        </div>

        <div class="px-2 py-2">
          <div class="card-item__name fs-4">{{ user.login }}</div>
          <a
            :href="user.html_url"
            class="col col-12 d-block card-item__url small"
            data-testid="user-profile-link"
            rel="noreferrer"
            target="_blank"
          >
            User Profile
          </a>
          <hr />

          <div class="d-flex justify-content-end">
            <button class="btn small text-muted" data-testid="delete-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    users: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
