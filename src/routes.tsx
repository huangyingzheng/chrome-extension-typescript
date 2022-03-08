import React, { FC as FunctionalComponent, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react'
import SuspenseFallback from './suspenseFallback'


// type LoaderComponent<P= {}> = Promise<ComponentType <P> | { default: ComponentType<P>}>

interface IRouteObject {
  index?: boolean,
  path?: string,
  element: ReactNode,
  name?: string,
  children?: IRouteObject[]
}

const HOCSuspense = (component: LazyExoticComponent<FunctionalComponent>): React.ReactNode => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      {React.createElement(component)}
    </Suspense>
  )
}

const Entrance: LazyExoticComponent<FunctionalComponent> = lazy(() => import("Src/entrance"));



const routes: IRouteObject[] = [
  {
    path: '/',
    element: HOCSuspense(Entrance) ,
    name: 'entrance',
    children: [
      {
        path: '/entrance',
        element: HOCSuspense(Entrance) ,
        name: 'entrance1',
        children: [],
      }
    ]
  },
]

export default routes