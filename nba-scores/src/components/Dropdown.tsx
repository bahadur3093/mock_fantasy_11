import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";

interface DropdownProps {
  options: (string | number)[];
  selectedValue: string | number;
  onSelect: (value: string | number) => void;
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="w-full">
      <TouchableOpacity
        className="border border-gray-300 rounded-lg p-4 bg-white"
        onPress={() => setIsOpen(true)}
      >
        <Text className="text-gray-800">{selectedValue || placeholder}</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity
          className="flex-1 justify-center items-center bg-black/50"
          onPress={() => setIsOpen(false)}
          activeOpacity={1}
        >
          <View className="bg-white rounded-lg w-3/4 max-h-96">
            <FlatList
              data={options}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="p-4 border-b border-gray-200"
                  onPress={() => {
                    onSelect(item);
                    setIsOpen(false);
                  }}
                >
                  <Text className="text-gray-800 text-center">{item}</Text>
                </TouchableOpacity>
              )}
              ListFooterComponent={<View className="h-2" />}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
