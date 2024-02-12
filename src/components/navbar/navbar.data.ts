import { menuTitles } from '../../constants/menu-titles.constant'
import { INavbarLinksData } from './navbar.interface'
import { links } from '../../constants/links.constant'

export const publicRoutes: INavbarLinksData[] = [
  {
    id: 1,
    title: menuTitles.HOME,
    path: links.HOME,
  },
  {
    id: 2,
    title: menuTitles.MENU,
    path: links.MENU,
  },
  {
    id: 3,
    title: menuTitles.CART,
    path: links.CART,
  },
]

export const privateRoutes: INavbarLinksData[] = [
  ...publicRoutes,
  {
    id: 4,
    title: menuTitles.PROFILE,
    path: links.PROFILE,
  },
]
