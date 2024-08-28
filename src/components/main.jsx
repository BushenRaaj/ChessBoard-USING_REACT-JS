import React from 'react'
import './main.css';
import { FaChessRook } from "react-icons/fa";
import { FaRegChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { FaRegChessKing } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaChessPawn } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";


function Main() {
  return (
    <section class="chess">
      <table>
        <tr>
            <td class="w"><span><FaChessRook className='icon'/></span></td>
            <td class="d"><span><FaChessKnight className='icon'/></span></td>
            <td class="w"><span><FaChessBishop className='icon'/></span></td>
            <td class="d"><span><FaChessKing className='icon'/></span></td>
            <td class="w"><span><FaChessQueen className='icon'/></span></td>
            <td class="d"><span><FaChessBishop className='icon'/></span></td>
            <td class="w"><span><FaChessKnight className='icon'/></span></td>
            <td class="d"><span><FaChessRook className='icon'/></span></td>
            
        </tr>
        <tr>
            <td class="d"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="w"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="d"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="w"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="d"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="w"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="d"><span><FaChessPawn className='icon' fill='black'/></span></td>
            <td class="w"><span><FaChessPawn className='icon' fill='black'/></span></td>
        </tr>
        <tr>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            
        </tr>
        <tr>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>

         </tr>
        <tr>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
            <td class="w"></td>
            <td class="d"></td>
        </tr>
        <tr>
           <td class="d"></td>
           <td class="w"></td>
           <td class="d"></td>
           <td class="w"></td>
           <td class="d"></td>
           <td class="w"></td>
           <td class="d"></td>
           <td class="w"></td>

        </tr>
        <tr>
            <td class="w"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="d"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="w"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="d"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="w"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="d"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="w"><span><FaRegChessPawn className='icon'/></span></td>
            <td class="d"><span><FaRegChessPawn className='icon'/></span></td>
        
        </tr>
     <tr>
    <td class="d"><span><FaRegChessRook className='icon'/></span></td>
    <td class="w"><span><FaRegChessKnight className='icon'/></span></td>
    <td class="d"><span><FaRegChessBishop className='icon'/></span></td>
    <td class="w"><span><FaRegChessKing className='icon'/></span></td>
    <td class="d"><span><FaRegChessQueen className='icon'/></span></td>
    <td class="w"><span><FaRegChessBishop className='icon'/></span></td>
    <td class="d"><span><FaRegChessKnight className='icon'/></span></td>
    <td class="w"><span><FaRegChessRook className='icon'/></span></td>
    </tr>
    </table>
    </section>
  );
}

export default Main;
