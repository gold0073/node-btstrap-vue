<template>
  <div>
    <div class="comment-list-item">
      <div class="comment-list-item-name">
        <div>{{name}}</div>
        <div>{{commentObj.created_at.substring(0.10)}}</div>
      </div>
      <div class="comment-list-item-context">{{commentObj.context}}</div>
      <div class="comment-list-item-button">
        <b-button variant="info">수정</b-button>
        <b-button variant="info">삭제</b-button>
        <b-button variant="info" @click="subCommentToggle">대댓글</b-button>
      </div>
    </div>
    <template v-if="subCommentCreateToggle">
      <CommentCreate
        :isSubComment="true"
        :commentId="commentObj.comment_id"
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    <template v-if="subCommentList.length > 0">
      <div
        class="comment-list-item-subcomment-list"
        :key="item.subcomment_id"
        v-for="item in subCommentList"
      >
        <div class="comment-list-item-name">
          <div>{{item.user_name}}</div>
          <div>{{item.created_at.substring(0,10)}}</div>
        </div>
        <div class="comment-list-item-context">{{item.context}}</div>
        <div class="comment-list-item-button">
          <b-button variant="info">수정</b-button>
          <b-button variant="info">삭제</b-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import data from "@/data";
import CommentCreate from "./CommentCreate";
export default {
  name: "PostgreCommentListItem",
  props: {
    commentObj: Object
  },
  components: {
    CommentCreate
  },
  async created(){
    await this.$axios(
      {
        url : this.$microSeviceUrl + '/pgdb_contents?comment_id='+ this.commentObj.comment_id +'&act_type=sub_comment_inquery',
        method:'get'
      }).then( ret =>{
        console.log("results :" , ret);
        if(ret.data.errorcode ==0)
        {
          this.subCommentList =  ret.data.results;
        }
    });
  },
  data() {
    return {
      name: data.User.filter(
        item => item.user_id === this.commentObj.user_id
      )[0].name,
      subCommentList: [],
      subCommentCreateToggle: false
    };
  },
  methods: {
   
    subCommentToggle() {
      this.subCommentCreateToggle = !this.subCommentCreateToggle;
    },
    async reloadSubComments() {
      await this.$axios(
      {
        url : this.$microSeviceUrl + '/pgdb_contents?comment_id='+ this.commentObj.comment_id +'&act_type=sub_comment_inquery',
        method:'get'
      }).then( ret =>{
      console.log("results :" , ret);
      if(ret.data.errorcode ==0)
      {
        this.subCommentList =  ret.data.results;
      }
    });
    }
  }
};
</script>
<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  height:115px;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
  width: 20em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  height:100px;
  border: 0.5px solid black;
}
.comment-list-item-button {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1.5em;
  width: 20em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 5em;
}
</style>