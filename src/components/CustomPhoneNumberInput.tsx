import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function StyledPhoneInput() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div className="max-w-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone Number
      </label>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        // Container styling
        className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all"
        // Inner input styling
        numberInputProps={{
          className: "flex-1 bg-transparent outline-none px-2 text-gray-900 placeholder:text-gray-400"
        }}
      />
    </div>
  );
}
