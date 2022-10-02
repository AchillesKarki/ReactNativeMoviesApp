import { ScrollView } from 'native-base';

import ListItem from './ListItem';

const ListMain = ({ navigation, listItems, entity }) => {
  return (
    <ScrollView>
      {listItems.map((item, index) => {
        return <ListItem key={item + index} navigation={navigation} item={item} entity={entity} />;
      })}
    </ScrollView>
  );
};

export default ListMain;
