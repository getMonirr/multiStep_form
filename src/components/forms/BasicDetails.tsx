import {
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

type BasicDetailsData = {
  name: string;
  email: string;
  phone_number: string;
};

type BasicDetailsProps = BasicDetailsData & {
  updateFields: (fields: Partial<BasicDetailsData>) => void;
};

const BasicDetails = ({
  name,
  email,
  phone_number,
  updateFields,
}: BasicDetailsProps) => {
  // all country code
  const [allCountryCode, setAllCountryCode] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");

  // const countryCodes = [
  //   { code: "+91", flag: "🇮🇳" }, // India
  //   { code: "+1", flag: "🇺🇸" }, // United States
  //   // Add more country codes and flags as needed
  // ];

  useEffect(() => {
    axios.get("codes.json").then((res) => {
      const countries = res?.data;
      const allCountryCodes = countries.map(
        ({ flag, number }: { flag: any; number: number }) => {
          const obj = { code: number, flag };
          return obj;
        }
      );
      setAllCountryCode(allCountryCodes);
    });
  }, []);

  const handleCountryCodeChange = (event: any) => {
    const countryCode = event.target.value;
    setSelectedCountryCode(countryCode);
  };

  return (
    <div className="space-y-4">
      <Typography variant="h5">Basic Details</Typography>
      <TextField
        className="bg-white"
        fullWidth
        id="outlined-multiline-flexible"
        label="Name"
        size="small"
        required
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <TextField
        className="bg-white"
        fullWidth
        id="outlined-multiline-flexible"
        label="Email"
        size="small"
        type="email"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <div className="flex items-center ">
        <FormControl>
          <Select
            className="bg-white border-none"
            labelId="country-code-label"
            id="country-code-select"
            value={selectedCountryCode}
            onChange={handleCountryCodeChange}
            required
            size="small"
          >
            {allCountryCode.map(({ code, flag }) => (
              <MenuItem key={code} value={code}>
                <img src={flag} alt="flag" /> {code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box display="flex">
          <TextField
            className="bg-white"
            fullWidth
            id="outlined-multiline-flexible"
            label="Phone Number"
            size="small"
            type="tel"
            name="phoneNumber"
            required
            value={phone_number}
            onChange={(e) =>
              updateFields({
                phone_number: e.target.value,
              })
            }
          />
        </Box>
      </div>
    </div>
  );
};

export default BasicDetails;
