import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
////////////////////////////////////////////////////////
import Board from '@/components/mariaBoard/Board'
import ContentDetail from '@/components/mariaBoard/ContentDetail';
import Create from '@/components/mariaBoard/Create';
////////////////////////////////////////////////////////
import PostgreBoard from '@/components/postgreBoard/Board'
import PostgreContentDetail from '@/components/postgreBoard/ContentDetail';
import PostgreCreate from '@/components/postgreBoard/Create';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ////////////////////mariadb Board//////////////////
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'Create',
      component: Create
    },
    ////////////////////postgredb Board/////////////////
    {
      path: '/pgboard/free',
      name: 'PostgreBoard',
      component: PostgreBoard
    },
    {
      path: '/pgboard/free/detail/:contentId',
      name: 'PostgreContentDetail',
      component: PostgreContentDetail
    },
    {
      path: '/pgboard/free/create/:contentId?',
      name: 'PostgreCreate',
      component: PostgreCreate
    },
  ]
})