
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import { GlobalStyles } from './assets/css/GlobalCss.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyles/>
    <RouterProvider router={router} />
  </>
  
)
