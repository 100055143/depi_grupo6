import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface RelUnitEmpl {

    key?: string;
    unidad: Select;
    empleado: Select;
    fechadesde: DateTimeData;
    fechahasta: DateTimeData;
}