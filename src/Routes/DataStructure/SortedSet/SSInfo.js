import './SSInfo.css';
import SSVisualizer from './SSVisualizer.jsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  Toolbar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

function SSInfo() {
  return (
    <div className="Whole">
      <Toolbar/>
      <div className="Info">
        <h1 className="topic">Sorted Set</h1>
        <p className="det">Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items. Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form of an SS with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.

If the given SS has to be sorted in ascending order, then bubble sort will start by comparing the first element of the SS with the second element, if the first element is greater than the second element, it will swap both the elements, and then move on to compare the second and the third element, and so on.

If we have total n elements, then we need to repeat this process for n-1 times.

It is known as bubble sort, because with every complete iteration the largest element in the given SS, bubbles up towards the last place or the highest index, just like a water bubble rises up to the water surface.</p>
      </div>
      <div className="App" id="abc">
        <SSVisualizer></SSVisualizer>
      </div>
    </div>
  );
}

export default SSInfo;
