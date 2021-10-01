import DatePanel from "react-multi-date-picker/plugins/date_panel"
import DatePicker from "react-multi-date-picker";
const Calend2 = () =>{
    return (
<DatePicker
  multiple
  plugins={[
   <DatePanel />
  ]}
/>
    )};
export default Calend2;