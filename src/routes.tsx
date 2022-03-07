// import { ReactElement } from 'react'
import React, { FC as FunctionalComponent, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react'
import SuspenseFallback from './suspenseFallback'


// type LoaderComponent<P= {}> = Promise<ComponentType <P> | { default: ComponentType<P>}>

interface Iroute {
  path: string,
  // element: LazyExoticComponent<FunctionalComponent>,
  element: ReactNode
  name: string,
  subRoutes?: Iroute[]
}

const HOCSuspense = (component: LazyExoticComponent<FunctionalComponent>): React.ReactNode => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      {React.createElement(component)}
    </Suspense>
  )
}

const Entrance: LazyExoticComponent<FunctionalComponent> = lazy(() => import("Src/entrance"));



const routes: Iroute[] = [
  {
    path: '/',
    element: HOCSuspense(Entrance) ,
    name: 'entrance'
  }
]

export default routes