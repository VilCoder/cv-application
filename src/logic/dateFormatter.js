import { format } from "date-fns";
import { es } from "date-fns/locale";

export function dateFormatter(value) {
  const date = new Date(value);

  if (isNaN(date)) {
    return;
  }

  return format(date, "MMMM yyyy", {locale: es,});
}