import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ListHeaderProps {
  searchQuery?: string;
  onSearchChange?: (text: string) => void;
}

const ListHeader = ({ searchQuery, onSearchChange }: ListHeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        {showSearch ? (
          <View style={styles.searchInputContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#8E8E93"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search items..."
              placeholderTextColor="#8E8E93"
              value={searchQuery}
              onChangeText={onSearchChange}
              autoFocus
            />
            <TouchableOpacity onPress={() => setShowSearch(false)}>
              <Ionicons name="close-circle" size={20} color="#8E8E93" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.searchPlaceholder}
            onPress={() => setShowSearch(true)}
          >
            <Ionicons name="search" size={20} color="#8E8E93" />
            <Text style={styles.searchPlaceholderText}>Search items...</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Ionicons name="bag-handle-outline" size={24} color="#007AFF" />
          <View style={styles.statContent}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Total Items</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="star-outline" size={24} color="#FFCC00" />
          <View style={styles.statContent}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="trending-up" size={24} color="#34C759" />
          <View style={styles.statContent}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Avg. Rating</Text>
          </View>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.recentActivity}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Ionicons name="add-circle" size={20} color="#34C759" />
          </View>
          <Text style={styles.activityText}>New item added 2 hours ago</Text>
        </View>
        <View style={styles.activityItem}>
          <View style={styles.activityIcon}>
            <Ionicons name="heart" size={20} color="#FF3B30" />
          </View>
          <Text style={styles.activityText}>5 items favorited today</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1C1C1E',
  },
  searchPlaceholder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  searchPlaceholderText: {
    fontSize: 16,
    color: '#8E8E93',
    marginLeft: 8,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 12,
  },
  categoriesScroll: {
    paddingRight: 16,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    minWidth: 100,
  },
  categoryChipActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    marginLeft: 6,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  statContent: {
    marginLeft: 12,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  recentActivity: {
    marginBottom: 8,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityText: {
    fontSize: 14,
    color: '#1C1C1E',
    flex: 1,
  },
});

export default ListHeader;
