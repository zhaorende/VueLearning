import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Frame from '@/components/frame'
import StudentList from '@/components/student/student-list'
import StudentAdd from '@/components/student/student-add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame,
			children: [
        {
          path: '/student/list',
          component: StudentList
        },
        {
          path: '/student/add',
          component: StudentAdd
        }
      ]
    }
  ]
})
