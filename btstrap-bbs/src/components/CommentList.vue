<template>
  <div>
    <div class='content-detail-list' :key="item.comment_id" v-for="item in comments">
      <CommentListItem :commentObj="item"/>
    </div>
    <CommentCreate :contentId="contentId" :reloadComments="reloadComments"/>
  </div>
</template>
<script>
import data from "@/data";
import CommentListItem from './CommentListItem';
import CommentCreate from './CommentCreate';
export default {
  name: "CommentList",
  props: {
    contentId: Number
  },
  components: {
    CommentListItem,
    CommentCreate,
  },
  async created(){
    this.getCommentList();
  },
  data() {
    return {
      comments: [],
    }
  },
  methods: {
    async getCommentList(){
       await this.$axios(
          {
            url : this.$microSeviceUrl + '/contents?content_id='+ this.contentId +'&act_type=comment_inquery',
            method:'get'
          }).then( ret =>{
          console.log("results :" , ret);
          this.comments =  ret.data.results;
        });
    },
    async reloadComments() {
      this.getCommentList();
    }
  }
};
</script>