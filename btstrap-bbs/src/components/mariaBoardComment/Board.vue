<template>
  <div>
    <div class="p-1 mb-1 bg-dark text-primary">
    <h3 data-v-792738cd="" class=" text-center text-md-left bd-text-purple-bright">
      Comment
      <span data-v-792738cd="" class="text-vue-green">Board</span>
    </h3> 
    </div>
    <b-table striped hover :items="items" :fields="fields"  @row-clicked="rowClick"></b-table>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>
<script>
export default {
  name: 'Board',
  data() {
    return {

      fields: [
        {
          key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '등록일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        },
        /*
        {
          key: 'user_id',
          label: 'UserID'
        },
        */
       ],
       items: []
    }
  },
  async created(){
    this.getBoardList();
  },
  methods: {
    async getBoardList(){
      this.$axios.get(  this.$microSeviceUrl +'/mdb_boards?act_type=content_inquery').then( ret =>{

        console.log("results :" , ret);
        this.items = ret.data.results;
      });
    },
    rowClick(item, index, e) {
      this.$router.push({
        path: `/boardcomment/free/detail/${item.content_id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/boardcomment/free/create'
      })
    }
  }
}
</script>
<style scoped>
.text-vue-green[data-v-792738cd] {
    color: #42b883;
}
</style>