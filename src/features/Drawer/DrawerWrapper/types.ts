import { DrawerInter } from "../types";

export type Props = {
  data: DrawerInter[];
  openDropdownId?: string | null;
  toggleDropdown?: (id: string) => void;
};