import './App.css';
import { DatePicker, message, Alert } from "antd";
import 'antd/dist/antd.css';
import {useState}  from 'react'

function App() {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 600, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
        <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
      </div>
    </div>
  );
}

export default App;
