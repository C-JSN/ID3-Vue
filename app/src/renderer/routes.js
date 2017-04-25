export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/MainView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
