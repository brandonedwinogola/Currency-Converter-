/* eslint-disable react/prop-types */
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const CurrencyDropdown = ({
  currencies,
  selectedCurrency,
  setSelectedCurrency,
  favorites,
  toggleFavorite,
  title = "",
  flags = {},
}) => {
  const isFavorite = (curr) => favorites.includes(curr);

  return (
    <div className="mb-6">
      <label
        htmlFor={title}
        className="block text-lg font-medium text-gray-800 mb-2"
      >
        {title}
      </label>

      <div className="relative">
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* KSH as Base Currency */}
          <option value="KSH" className="bg-gray-100 text-gray-800">
            <img
              src={flags["KSH"]}
              alt="Kenyan Flag"
              className="inline-block w-6 h-4 mr-2"
            />
            KSH (Kenyan Shilling)
          </option>

          <hr className="my-1" />

          {/* Favorites Section */}
          {favorites.map((curr) => (
            <option className="bg-gray-100" value={curr} key={curr}>
              {flags[curr] && (
                <img
                  src={flags[curr]}
                  alt={`${curr} flag`}
                  className="inline-block w-6 h-4 mr-2"
                />
              )}
              {curr}
            </option>
          ))}

          <hr className="my-1" />

          {/* Other Currencies Section */}
          {currencies
            .filter((c) => !favorites.includes(c) && c !== "KSH")
            .map((curr) => (
              <option value={curr} key={curr}>
                {flags[curr] && (
                  <img
                    src={flags[curr]}
                    alt={`${curr} flag`}
                    className="inline-block w-6 h-4 mr-2"
                  />
                )}
                {curr}
              </option>
            ))}
        </select>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(selectedCurrency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-indigo-600 hover:text-indigo-800"
          aria-label="Toggle Favorite"
        >
          {isFavorite(selectedCurrency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
