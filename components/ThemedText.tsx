import { Text, TextProps, StyleSheet, useColorScheme } from 'react-native';

export function ThemedText(props: TextProps) {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#000';

  return <Text {...props} style={[{ color }, props.style]} />;
}

export function ThemedTitle(props: TextProps) {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? '#fff' : '#000';

  return (
    <Text 
      {...props} 
      style={[
        { color, fontSize: 24, fontWeight: 'bold', marginBottom: 10 }, 
        props.style
      ]} 
    />
  );
}