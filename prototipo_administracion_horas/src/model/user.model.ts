import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface UserModel 
{
    key?: string;
    email: string;
    password: string;
    nombre: string;
    fechadesde: DateTimeData;
    fechahasta: DateTimeData;
    unidad: string;
}