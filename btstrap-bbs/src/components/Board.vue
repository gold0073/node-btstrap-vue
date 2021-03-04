<template>
  <div>
    
    <b-table striped hover :items="items" :fields="fields"  @row-clicked="rowClick"></b-table>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>
<script>
<<<<<<< HEAD
=======
import data from '@/data'
import axios from 'axios';

>>>>>>> 5d41eae96d2f274a8aa18d1b793a4ba7e00be418
export default {
  name: 'Board',
  created() {
    this.item = axios.get('http://localhost:8000/contents')
  },
  data() {
<<<<<<< HEAD
    //let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
    //items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})

=======
    let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
    items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
>>>>>>> 5d41eae96d2f274a8aa18d1b793a4ba7e00be418
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
      
      this.$http.get('http://127.0.0.1:8000/contents').then( ret =>{
        
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