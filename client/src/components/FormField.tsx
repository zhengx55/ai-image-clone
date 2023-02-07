import React, { FC } from "react";

type IProps = {
  LabelName: string;
  type: string;
  name: string;
  value: string;
  handleChange: (e: any) => void;
  placeholder: string;
  isSupriseMe?: boolean;
  handleSupriseMe?: () => void;
};
const FormField: FC<IProps> = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-end gap-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          {LabelName}
        </label>
        {isSupriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className="rounded-[5px] bg-[#ECECF1] py-1 px-2 text-xs font-semibold text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={handleChange}
        required
        value={value}
        className="text-sm, block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff]"
      />
    </div>
  );
};

export default FormField;
