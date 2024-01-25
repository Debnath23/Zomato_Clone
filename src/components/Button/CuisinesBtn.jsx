import React, { useEffect, useState } from "react";

function CuisinesBtn() {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const toggleCountrySelection = (country) => {
    const isSelected = selectedCountries.includes(country);

    if (isSelected) {
      setSelectedCountries((prevSelected) =>
        prevSelected.filter((selected) => selected !== country)
      );
    } else {
      setSelectedCountries((prevSelected) => [...prevSelected, country]);
    }
  };

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          selectedCountries.length === 0 && "text-gray-700"
        }`}
      >
        {selectedCountries.length > 0
          ? selectedCountries.length === 1
            ? selectedCountries[0]
            : `${selectedCountries.length} countries selected`
          : "Select Countries"}
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              selectedCountries.includes(country?.name) &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              toggleCountrySelection(country?.name);
              setOpen(true);
              setInputValue("");
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CuisinesBtn;
