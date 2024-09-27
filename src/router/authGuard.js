import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseconfig'

export default function authGuard(to, from, next) {
  onAuthStateChanged($auth, (user) => {
    if (!user) {
      next({ name: 'login' })
    } else if (user && (to.path === '/login' || to.path === '/register')) {
      next({ name: 'home' })
    } else {
      next()
    }
  })
}
