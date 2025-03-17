import { DrawerInter } from "../types";

export type Props = {
   data: DrawerInter[],
   toggleDropdown?: (id: string) => void
}