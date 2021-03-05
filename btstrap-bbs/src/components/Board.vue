<template>
  <div>
    
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
      this.$axios.get(  this.$microSeviceUrl +'/contents?act_type=content_inquery').then( ret =>{

        console.log("results :" , ret);
        this.items = ret.data.results;
        return ret;
      });
    },
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/free/detail/${item.content_id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/board/free/create'
      })
    }
  }
}
</script>