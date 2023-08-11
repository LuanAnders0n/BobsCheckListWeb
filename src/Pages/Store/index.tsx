import React, { useRef } from 'react';
import { Container } from './styled';
import DropdownMenu from '../../Components/DropDown';
import bobs from '../../images/bobs.svg';
import Today from '../../Components/Date';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Store = () => {
  const captureRef = useRef(null);

  const captureAndSavePDF = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF();

      const pdfWidth = 210;
      const pdfHeight = 290;
      const imgWidth = 190;
      const imgHeight = 285;

      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save('captured_element.pdf');
    }
  };

  return (
    <div>
      <div ref={captureRef}>
        <Container>
          <div className="logo-div">
            <img className="logo" src={bobs} alt="" />
            <h1 className="h1">CHECK LIST</h1>
          </div>
          <div className="body">
            <h1 className="h2">LOJA</h1>
            <Today />
          </div>
          <DropdownMenu time="Abertura" />
          <DropdownMenu time="Passagem" />
        </Container>
      </div>
      <div className="back">
        <a className="a1" href="/">
          Voltar
        </a>
        <button onClick={captureAndSavePDF}>Capturar e Salvar como PDF</button>
      </div>
    </div>
  );
};

export default Store;
