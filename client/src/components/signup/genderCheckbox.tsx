import { FC } from "react";
interface GenderCheckboxProps {
  handleGenderChange: (gender: string) => void;
  activeGender: string;
}

export const GenderCheckbox: FC<GenderCheckboxProps> = ({
  handleGenderChange,
  activeGender,
}) => {
  return (
    <div className="tw-flex">
      <div className="tw-form-control">
        <label
          className={`tw-cursor-pointer tw-label ${
            activeGender === "male" && "selected"
          }`}
        >
          <span className="tw-label-text">Male</span>
          <input
            type="radio"
            className="tw-ml-3 tw-checkbox tw-checkbox-secondary"
            value="male"
            name="gender"
            checked={activeGender === "male"}
            onChange={(e) => {
              handleGenderChange(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="tw-form-control">
        <label
          className={`tw-cursor-pointer tw-label ${
            activeGender === "female" && "selected"
          }`}
        >
          <span className="tw-label-text">Female</span>
          <input
            type="radio"
            className="tw-checkbox tw-ml-3  tw-checkbox-secondary"
            value="female"
            name="gender"
            checked={activeGender === "female"}
            onChange={(e) => {
              handleGenderChange(e.target.value);
            }}
          />
        </label>
      </div>
    </div>
  );
};
