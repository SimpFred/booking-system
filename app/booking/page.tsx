import BookingCalendar from "../components/bookingCalendar";
import DropdownContainer from "../components/dropdown";
import OnClickButton from "../components/onClickButton";
import Title from "../components/title";
import { BookingProvider } from "../context";

const BookingPage = () => {
  const isNextButtonDisabled = false;
  const handleNextClick = () => {
    console.log("Next button clicked");
  };
  return (
    <div className="max-h-screen sm:max-h-[180vh] p-6 mb-[53px] flex flex-col">
      <Title text="Välj en tid" />
      <BookingProvider>
        <DropdownContainer />
        {/*  <div
            // Initially hide the scrollbar to prevent it from obstructing the right pagination icon in the calendar
            className={`mt-[40px] max-h-[52vh] overflow-y-scroll ${
              isScrolled ? "scrollbar-visible" : "scrollbar-hidden"
            }`}
            onScroll={handleScroll}
          >
           */}
        <BookingCalendar />
        {/* </div> */}
        <div className="mt-[27px] flex-col">
          <div className="flex justify-center">
            <OnClickButton
              text="Nästa"
              onClick={handleNextClick}
              disabled={isNextButtonDisabled}
            />
          </div>
          {/*
            {showWarning && (
              <WarningMessage
                text={"Ett rum måste vara markerat för att gå vidare"}
              />
            )}*/}
        </div>
      </BookingProvider>
    </div>
  );
};

export default BookingPage;
