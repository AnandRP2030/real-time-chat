export const GenderCheckbox = () => {
  return (
    <div className="tw-flex">
      <div className="tw-form-control">
        <label className="tw-cursor-pointer tw-label">
          <span className="tw-label-text">Male</span>
          <input
            type="checkbox"
            className="tw-checkbox tw-checkbox-secondary"
          />
        </label>
      </div>
      <div className="tw-form-control">
        <label className="tw-cursor-pointer tw-label">
          <span className="tw-label-text">Female</span>
          <input
            type="checkbox"
            className="tw-checkbox tw-checkbox-secondary"
          />
        </label>
      </div>
    </div>
  );
};
