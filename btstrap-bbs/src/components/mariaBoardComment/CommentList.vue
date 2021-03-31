<template>
  <div>
    <div
      class="content-detail-list"
      :key="item.comment_id"
      v-for="item in comments"
    >
      <CommentListItem :commentObj="item" />
    </div>
    <template v-if="comments !== 'error'">
      <CommentCreate :contentId="contentId" :reloadComments="reloadComments" />
    </template>
  </div>
</template>
<script>
import data from "@/data";
import CommentListItem from "./CommentListItem";
import CommentCreate from "./CommentCreate";
export default {
  name: "CommentList",
  props: {
    contentId: Number
  },
  components: {
    CommentListItem,
    CommentCreate
  },
  async created() {
    await this.$axios({
      url:
        this.$microSeviceUrl +
        "/mdb_boards_comments?content_id=" +
        this.contentId +
        "&act_type=comment_inquery",
      method: "get"
    })
      .then(ret => {
        console.log("results :", ret);
        this.comments = ret.data.results;
      })
      .catch(err => {
        this.comments = "error";
      });
  },
  data() {
    return {
      comments: []
    };
  },
  methods: {
    async reloadComments() {
      await this.$axios({
        url:
          this.$microSeviceUrl +
          "/mdb_boards_comments?content_id=" +
          this.contentId +
          "&act_type=comment_inquery",
        method: "get"
      }).then(ret => {
        console.log("results :", ret);
        this.comments = ret.data.results;
      });
    }
  }
};
</script>
