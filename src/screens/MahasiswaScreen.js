import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// Dataset statis di luar komponen utama
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function MahasiswaScreen() {
  // State pencarian
  const [keyword, setKeyword] = useState('');

  // Filter real-time, tidak peduli huruf besar/kecil
  const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.prodi}>{item.prodi}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
        autoCorrect={false}
      />

      <FlatList
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>Data tidak ditemukan!</Text>}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C8CDD3',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1E3A5F',
  },
  nama: { fontSize: 16, fontWeight: '600', color: '#1A1A1A' },
  prodi: { fontSize: 13, color: '#5F6B7A', marginTop: 2 },
  empty: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
    color: '#9AA3AE',
  },
});
