import { TextField, Typography } from "@mui/material";

type AddressData = {
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
};

type AddressProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const Address = ({
  address_1,
  address_2,
  city,
  state,
  pincode,
  country,
  updateFields,
}: AddressProps) => {
  return (
    <div className="space-y-4">
      <Typography variant="h5">Address</Typography>
      <TextField
        className="bg-white"
        fullWidth
        id="outlined-multiline-flexible"
        label="Address Line one"
        size="small"
        value={address_1}
        onChange={(e) => updateFields({ address_1: e.target.value })}
      />
      <TextField
        className="bg-white"
        fullWidth
        id="outlined-multiline-flexible"
        label="Address Line two"
        size="small"
        value={address_2}
        onChange={(e) => updateFields({ address_2: e.target.value })}
      />
      <div className="flex lg:flex-row flex-col justify-between items-center gap-4 lg:gap-8">
        <TextField
          className="bg-white"
          id="outlined-multiline-flexible"
          label="City"
          size="small"
          fullWidth
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
        <TextField
          className="bg-white"
          id="outlined-multiline-flexible"
          label="State"
          size="small"
          fullWidth
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-4 lg:gap-8">
      <TextField
        className="bg-white"
        id="outlined-multiline-flexible"
        label="PinCode"
        size="small"
        fullWidth
        value={pincode}
        onChange={(e) => updateFields({ pincode: parseInt(e.target.value) })}
      />
      <TextField
          className="bg-white"
          id="outlined-multiline-flexible"
          label="Country"
          size="small"
          fullWidth
          value={country}
          onChange={(e) => updateFields({ country: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Address;
