import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface RelUnitProj {

    key?: string;
    unidad: Select;
    proyecto: Select;
    fechadesde: DateTimeData;
    fechahasta: DateTimeData;
}