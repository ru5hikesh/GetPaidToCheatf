import { useState } from "react";

export function SchedulePicker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  const currentDate = new Date();
  const minDate = currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  const minTime = currentDate.toTimeString().slice(0, 5); // Format: HH:MM

  return (
    <div>
      <div className="mb-2">Schedule as public</div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Date Picker */}
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={minDate} // Prevent selecting past dates
            className="w-full bg-[#F056004D] text-white p-3 rounded-lg cursor-pointer"
          />
          
        </div>

        {/* Time Picker */}
        <div className="relative">
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            min={selectedDate === minDate ? minTime : undefined} // Restrict past times only for today
            className="w-full bg-[#F056004D] text-white p-3 rounded-lg cursor-pointer"
          />
          
        </div>
      </div>
    </div>
  );
}
