import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * InfoCard - komponen kartu informasi yang reusable.
 *
 * Props:
 *  - title   (string)   : judul tugas / informasi
 *  - status  (string)   : 'selesai' | 'proses'
 *  - onPress (function) : dipanggil saat tombol 'Lihat Detail' ditekan
 */
export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  // Conditional styling: hijau untuk 'selesai', oranye untuk 'proses'
  const badgeColor = isSelesai ? '#2E7D32' : '#EF6C00';
  const badgeBg = isSelesai ? '#E8F5E9' : '#FFF3E0';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={[styles.badge, { backgroundColor: badgeBg, borderColor: badgeColor }]}>
        <Text style={[styles.badgeText, { color: badgeColor }]}>
          {isSelesai ? 'Selesai' : 'Proses'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    marginBottom: 14,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#1E3A5F',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
