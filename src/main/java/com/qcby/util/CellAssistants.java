package com.qcby.util;


import com.google.common.collect.Table;
import com.qcby.entity.Pc_admin;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author 刘辉
 * @package_name com.qcby.util
 * @create 2019-11-13
 */
public class CellAssistants {

    public static List<Pc_admin> importFile(InputStream inp) throws IOException, InvalidFormatException {
            XSSFWorkbook workBook = new XSSFWorkbook(inp);
            //解析工作表
            int size = workBook.getNumberOfSheets();

            System.out.println("一共有"+size+"个工作表");
            //循环处理每个表中的数据
            List<Pc_admin> Pc_adminList = new ArrayList<>();
            XSSFRow row;
            XSSFSheet sheet;
//         XSSFCell cell;
            for (int i = 0; i < size; i++){
                sheet =workBook.getSheetAt(i);
                //拿到具体的工作表
                System.out.println("读取当前工作表的名称"+sheet.getSheetName());
                //得到有效行
                int rowNumber = sheet.getPhysicalNumberOfRows();
                int columnNumber = sheet.getRow(0).getPhysicalNumberOfCells();
                System.out.println("有效行数："+rowNumber);

                for (int rowIndex = 0; rowIndex < rowNumber; rowIndex++){
                    System.out.println("正在读取第"+(rowIndex+1)+"行：");
                    if (rowIndex ==0)
                    {
                        continue;
                    }
                    row =sheet.getRow(rowIndex);
//                 if (row == null){
//                     return;
//                 }
                    Iterator<Cell> cellIterator = row.cellIterator();
                    Pc_admin Pc_admin = new  Pc_admin();
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setId(1L);
                    }

                     if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setAddress(cellValue.toString());
                    }

                     if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setMobile(cellValue.toString());
                    }

                     if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setPassword(cellValue.toString());
                    }

                     if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setCoupon_code(cellValue.toString());
                    }

                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setGender((short)(cellValue.toString().equals("男")?1:0));
                    }

                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setLogin_name(cellValue.toString());
                    }

                     if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setType((short)(cellValue.toString().equals("个人")?1:0));
                    }

                      if(cellIterator.hasNext()){
                          Byte a =1;
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setStatus(a);
                    }

                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setCreate_at(1l);
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setUpdate_at(Long.valueOf(cellValue.toString().substring(0,cellValue.toString().length()-2)));
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setLast_login_at(1l);
                    }

                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setCountry(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setProvince(cellValue.toString());
                    }

                     if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setCity(cellValue.toString());
                    }
                      if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setParent_id(1l);
                    }
                       if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setParent_id(1l);
                    }
                        if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setBegin_date(1l);
                    }
                         if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setEnd_date(1l);
                    }
                          if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        Pc_admin.setUrl(cellValue.toString());
                    }


                    System.out.println(Pc_admin);
                    //Pc_adminMapper.insertSelective(Pc_admin);
                    Pc_adminList.add(Pc_admin);
                }
            }
            return Pc_adminList;
    }

    private static  Object getCellValue(Cell cell){
        CellType cellTypeEnum = cell.getCellTypeEnum();

        Object obj =null;
        switch(cellTypeEnum)  {
            case STRING:
                obj= cell.getStringCellValue();
                break;
            case _NONE:
                break;
            case NUMERIC:
                obj= cell.getNumericCellValue();
                break;

            case FORMULA:
                break;
            case BLANK:
                break;
            case BOOLEAN:
                break;
            case ERROR:
                break;
            default:
                return obj;
        }
        return obj;
    }
}

