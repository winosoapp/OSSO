import { View, ViewProps, useColorScheme } from 'react-native';

export function ThemedView(props: ViewProps) {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';

  return <View {...props} style={[{ backgroundColor }, props.style]} />;
}