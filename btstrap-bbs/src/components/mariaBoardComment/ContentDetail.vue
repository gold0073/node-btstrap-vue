<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentId}}
          </div>
          <div class="content-detail-content-info-right-subject">
            {{title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{created.substring(0,10)}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{context}}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <CommentList :contentId="contentId"/>
      </div>
    </b-card>
  </div>
</template>

<script>
import data from "@/data";
import qs from "qs";
import CommentList from "./CommentList";
export default {
  name: "ContentDetail",
  components: {
    CommentList,
  },
   async created(){
    this.getContentDetail();
  },
  data() {
    const contentId = Number(this.$route.params.contentId);
    return {
      contentId: contentId,
      title: '',
      context: '',
      user: '',
      created: ''
    };
  },
  methods: {

    async getContentDetail(){
     console.log("contentId==>" , this.$route.params.contentId);

     await this.$axios.get('http://127.0.0.1:8000/mdb_boards?content_id='+Number(this.$route.params.contentId) +'&act_type=content_inquery').then( ret =>{
        console.log("results :" , ret);
        this.title = ret.data.results[0].title;
        this.context = ret.data.results[0].context;
        this.user = ret.data.results[0].user_name;
        this.created = ret.data.results[0].created_at;
        
      });
    },
    //COntent 삭제
    async deleteData() {
      console.log("contentId==>" , this.$route.params.contentId);
      await  this.$axios.post( this.$microSeviceUrl + "/mdb_boards", qs.stringify({
        content_id:  this.$route.params.contentId,
        act_type : "content_delete"
      })).then(ret =>{
        console.log("Post ==>", ret);
        
      });

      this.$router.push({
        path: '/boardcomment/free/'
      })
      
      /* delete 메소드가 전달이 안됨
      await this.$axios(
        {
          url: 'http://127.0.0.1:8000/mdb_boards?content_id='+  this.$route.params.contentId,
          method:'post',
        }).then( ret =>{
        console.log("results :" , ret);
        
      });
      */

    },
    updateData() {
      this.$router.push({
        path: `/boardcomment/free/create/${this.contentId}`
      })
    }
  }
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 170px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 0.3rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 0.5rem;
  padding: 0.5rem;
  min-height: 50px;
}
</style>