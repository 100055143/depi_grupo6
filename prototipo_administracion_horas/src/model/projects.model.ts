import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface projects
{
    key?: string;
    name: string;
    fechadesde: DateTimeData;
    fechahasta: DateTimeData;
}