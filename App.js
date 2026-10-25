import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import InfoCard from './src/components/InfoCard';
import MahasiswaScreen from './src/screens/MahasiswaScreen';

export default function App() {
  const [tab, setTab] = useState('soal1');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />

        {/* Tab sederhana untuk berpindah antara Soal 1 dan Soal 2 */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, tab === 'soal1' && styles.tabActive]}
            onPress={() => setTab('soal1')}
          >
            <Text style={[styles.tabText, tab === 'soal1' && styles.tabTextActive]}>
              Soal 1: InfoCard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tab === 'soal2' && styles.tabActive]}
            onPress={() => setTab('soal2')}
          >
            <Text style={[styles.tabText, tab === 'soal2' && styles.tabTextActive]}>
              Soal 2: Search
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {tab === 'soal1' ? (
            <View>
              <Text style={styles.heading}>Daftar Tugas</Text>
              <InfoCard
                title="Laporan Praktikum Mobile Computing"
                status="selesai"
                onPress={() => Alert.alert('Detail', 'Laporan Praktikum - Status: Selesai')}
              />
              <InfoCard
                title="Pembuatan Aplikasi UTS React Native"
                status="proses"
                onPress={() => Alert.alert('Detail', 'Aplikasi UTS - Status: Proses')}
              />
              <InfoCard
                title="Presentasi Proyek Kelompok"
                status="proses"
                onPress={() => Alert.alert('Detail', 'Presentasi Proyek - Status: Proses')}
              />
            </View>
          ) : (
            <MahasiswaScreen />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E5EA',
  },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center' },
  tabActive: { borderBottomWidth: 3, borderBottomColor: '#1E3A5F' },
  tabText: { fontSize: 14, color: '#7A8594', fontWeight: '600' },
  tabTextActive: { color: '#1E3A5F' },
  content: { flex: 1, padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', color: '#1A1A1A', marginBottom: 12 },
});
