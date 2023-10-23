// ResumePDF.js

import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
  },
});

export default function ResumePDF({ data }) {
  console.log(data)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Personal Information</Text>
          <Text style={styles.content}>{data.firstName} {data.lastName}</Text>
          <Text style={styles.content}>{data.email}</Text>
          <Text style={styles.content}>{data.phone}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Education</Text>
          <Text style={styles.content}>{data.schoolName}</Text>
          <Text style={styles.content}>{data.degree}</Text>
          <Text style={styles.content}>{data.graduationYear}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Work Experience</Text>
          <Text style={styles.content}>{data.company}</Text>
          <Text style={styles.content}>{data.position}</Text>
          <Text style={styles.content}>{data.startYear} - {data.endYear}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Skills</Text>
          <Text style={styles.content}>{data.skills}</Text>
        </View>
      </Page>
    </Document>
  );
}
