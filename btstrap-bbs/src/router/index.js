import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
////////////////////////////////////////////////////////
import MariaBoard from '@/components/mariaBoard/Board'
import MariaContentDetail from '@/components/mariaBoard/ContentDetail';
import MariaCreate from '@/components/mariaBoard/Create';
////////////////////////////////////////////////////////
import PostgreBoard from '@/components/postgreBoard/Board'
import PostgreContentDetail from '@/components/postgreBoard/ContentDetail';
import PostgreCreate from '@/components/postgreBoard/Create';
////////////////////////////////////////////////////////
import BoardComment from '@/components/mariaBoardComment/Board'
import BoardCommentContentDetail from '@/components/mariaBoardComment/ContentDetail';
import BoardCommentCreate from '@/components/mariaBoardComment/Create';

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
      name: 'MariaBoard',
      component: MariaBoard
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'MariaContentDetail',
      component: MariaContentDetail
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'MariaCreate',
      component: MariaCreate
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
     ////////////////////postgredb Board/////////////////
     {
      path: '/boardComment/free',
      name: 'BoardComment',
      component: BoardComment
    },
    {
      path: '/boardComment/free/detail/:contentId',
      name: 'BoardCommentContentDetail',
      component: BoardCommentContentDetail
    },
    {
      path: '/boardComment/free/create/:contentId?',
      name: 'BoardCommentCreate',
      component: BoardCommentCreate
    },
  ]
})