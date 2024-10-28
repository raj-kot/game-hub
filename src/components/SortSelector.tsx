import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortParams = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average ratings" },
  ];
  const currentSortOrder = sortParams.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder ? currentSortOrder.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortParams.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => onSelectSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
