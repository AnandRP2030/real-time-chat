export const GenderCheckbox = () => {
	return (
	  <div className='tw-flex'>
		<div className='tw-form-control'>
		  <label className='tw-label tw-gap-2 tw-cursor-pointer'>
			<span className='tw-label-text'>Male</span>
			<input type='checkbox' className='tw-checkbox tw-border-slate-900' />
		  </label>
		</div>
		<div className='tw-form-control'>
		  <label className='tw-label tw-gap-2 tw-cursor-pointer'>
			<span className='tw-label-text'>Female</span>
			<input type='checkbox' className='tw-checkbox tw-border-slate-900' />
		  </label>
		</div>
	  </div>
	);
  };
  