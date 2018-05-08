import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface unit
{
    key?: string;
    name: string;
    fechadeste: DateTimeData;
    fechahasta: DateTimeData;

}