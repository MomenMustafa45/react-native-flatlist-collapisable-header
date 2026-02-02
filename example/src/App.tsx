import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dummyData } from './utils/dummyData';
import type { ListItem as ListItemType } from './utils/types';
import ListHeader from './components/ListHeader/ListHeader';
import { AnimatedHeaderFlatList } from 'react-native-flatlist-collapsible-header';
import DataItem from './components/ListItem/ListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback } from 'react';

const App = () => {
  const renderItem = ({ item }: { item: ListItemType; index: number }) => (
    <DataItem item={item} />
  );

  const keyExtractor = (item: ListItemType) => item.id;

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.itemSeprator} />,
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedHeaderFlatList
        data={dummyData}
        headerHeight={400}
        renderHeader={() => <ListHeader />}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listStyles}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  listStyles: {
    paddingHorizontal: 20,
  },
  itemSeprator: { height: 20 },
});

export default App;
