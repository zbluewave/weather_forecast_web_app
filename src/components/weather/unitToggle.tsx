'use client'
import {Unit} from "@/interfaces/unit";
import {useUnitContext} from "@/context/unitContext";

export const UnitToggle = () => {
    const { unit, setUnit } = useUnitContext();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUnit(e.target.value as Unit);
    }

    return (
        <div className="flex justify-end">
            <div id="toggle-count" className="p-0.5 inline-block bg-gray-100 rounded-lg dark:bg-gray-700">
                <label htmlFor="toggle-metric" className="relative inline-block py-2 px-3">
                      <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                        Metric
                      </span>
                    <input id="toggle-metric" name="toggle-count" type="radio" value="metric" checked={unit == 'metric'} onChange={onChange}
                           className="absolute top-0 end-0 w-full h-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent"
                    />
                </label>
                <label htmlFor="toggle-imperial" className="relative inline-block py-2 px-3">
                    <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
                        Imperial
                    </span>
                    <input id="toggle-imperial" name="toggle-count" type="radio" value="imperial" checked={unit == 'imperial'} onChange={onChange}
                           className="absolute top-0 end-0 w-full h-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent"
                    />
                </label>
            </div>
        </div>
    )
}

export default UnitToggle;