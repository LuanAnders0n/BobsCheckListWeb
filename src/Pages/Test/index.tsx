import React, { useRef } from 'react';
import DropDown from '../../Components/DropDown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Test = () => {
  const captureRef = useRef(null);

  const captureAndSavePDF = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF();

      const pdfWidth = 210; // A4 paper width in mm
      const pdfHeight = 290; // A4 paper height in mm
      const imgWidth = 200; // Adjust the image width
      const imgHeight = 280; // Calculate proportional height

      const x = (pdfWidth - imgWidth) / 2; // Center horizontally
      const y = (pdfHeight - imgHeight) / 2; // Center vertically

      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save('captured_element.pdf');
    }
  };

  return (
    <div>
      <h1>Captura de Elemento e Salvar como PDF</h1>
      <div ref={captureRef}>
        <DropDown time="Abertura" />
      </div>
      <button onClick={captureAndSavePDF}>Capturar e Salvar como PDF</button>
    </div>
  );
};

export default Test;
