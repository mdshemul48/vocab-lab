import useSelectLan from '../hooks/useSelectLan';

export function SentenceLanToggle() {
  const { isBangla, setIsBangla } = useSelectLan();

  const onToggleHandler = () => {
    setIsBangla(!isBangla);
  };

  return (
    <div className="text-right">
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer mt-4"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onClick={onToggleHandler}
          checked={isBangla}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className="ml-3 text-sm font-semibold text-slate-700 font-poppins">
          {isBangla ? 'Bangla' : 'English'}
        </span>
      </label>
      <p className="text-slate-500 text-xs font-poppins">
        Switch sentence language with this toggle.
      </p>
    </div>
  );
}
