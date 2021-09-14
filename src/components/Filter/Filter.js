import { FilterLabel, FilterInput } from "./Filter.styles";
import * as actions from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "redux/contacts";

export default function Filter() {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const onFilterChange = evt =>
    dispatch(actions.filterChange(evt.currentTarget.value));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterLabel>
  );
}
