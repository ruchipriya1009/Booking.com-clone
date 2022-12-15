import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from './style/style.module.css';
import SearchIcon from '@mui/icons-material/Search';
import debounceControll from './debounce_search/DebounceControll';
import { useDispatch } from 'react-redux';
import { fetchDebounce } from './debounce_search/fetchDebounce';
import DebouncedCard from './debounce_search/DebouncedCard';
// import dayjs from 'dayjs';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function SearchBox( props ) {
  // const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const debounceDisPach = useDispatch();
//hooks used for debounce
  const [ searchData, setSearchData ] = React.useState( false );
  // console.log(searchData)
const debounceOnChange = React.useCallback(debounceControll(onChange, 400), []);

//input onchange event
function onChange(value) {
  debounceDisPach( fetchDebounce( value ) );
  setSearchData( true );
  if ( !value ) {
    setSearchData( false );
}
}

  const style = {
    border: "3px solid #F9B82E"
  }

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div >
    <Paper
      style={style}
    className={props.widthStatus? styles.searchInputBox:""}
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: "70%" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      <SearchIcon />
      </IconButton>
          <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Destinations or attraction name"
        inputProps={ { 'aria-label': 'Destinations, museums, tours...' } }
        // value={ searchData }
        onChange={e => debounceOnChange(e.target.value)}
      />
      <Button variant="contained" className={ styles.searchButton }>Search</Button>

      </Paper>
      {/* <div className={style.searchDateBox}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
   </div> */}
     
      {
        searchData?<DebouncedCard/>:""
      }

    </div>

  );
}