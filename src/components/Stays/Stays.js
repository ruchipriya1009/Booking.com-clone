import FirstSection from "./PageSections/FirstSection";
import SecondSection from "./PageSections/SecondSection";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSuggestions} from "../../actions/suggestionAction";
import {HomeGuestsDiv} from "./PageSections/HomeGuests/HomeGuestsDiv"
import {MiddleSection} from "./PageSections/middleSection/MiddleSection"
import {NextTrip} from "./PageSections/NextTripDiv/NextTrip";
import Degination from "./PageSections/Degination";
import Home from "./PageSections/pages/stay/Stay";


function Stays() {
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestionsData.suggestions);

    useEffect(() => {
        if (suggestions.length === 0) {
            dispatch(getSuggestions())
        }
    }, [suggestions])

    return (<>
            {/* <FirstSection suggestions={suggestions}/> */}
             <Home/>
            <SecondSection/>
            <div>
            <MiddleSection />
            </div>
            <div>
            <NextTrip />
            </div>
            <div>
            <HomeGuestsDiv />
            </div>
            <div>
            <Degination />
            </div>

        </>);
}

export default Stays;