import { format } from "date-fns";
import { es } from "date-fns/locale";

export function formatDateUI(value) {
  if (!value) {
    return;
  }

  const [year, month] = value.split("-");
  const date = new Date(year, month - 1);
  return format(date, "MMMM yyyy", {locale: es,});
}