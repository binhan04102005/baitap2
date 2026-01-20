import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Nhập số điện thoại</Text>
          <Text style={styles.subtitle}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#C7C7CD"
            keyboardType="phone-pad"
            autoFocus={true}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    fontSize: 18,
    paddingVertical: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F2F2F7', // Màu xám nhạt như ảnh của bạn
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#A1A1A1',
    fontSize: 16,
    fontWeight: '600',
  },
});
