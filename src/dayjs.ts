import InternalDayjs  from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

InternalDayjs.extend(customParseFormat)

InternalDayjs.locale("fr")
export default InternalDayjs;

