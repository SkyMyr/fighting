package com.qcby.util;

import com.qcby.entity.CpnUserDepartment;
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
 * @ClassNameCellValue
 * @Description TODO
 * @Author myr
 * @Date 2019/11/11 21:42
 * @Version 1.0
 **/
public class CellValue {

    public static List<CpnUserDepartment> importFile(InputStream inp) throws IOException, InvalidFormatException {
            XSSFWorkbook workBook = new XSSFWorkbook(inp);
            //解析工作表
            int size = workBook.getNumberOfSheets();

            System.out.println("一共有"+size+"个工作表");
            //循环处理每个表中的数据
            List<CpnUserDepartment> cpnUserDepartmentList = new ArrayList<>();
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
                    CpnUserDepartment cpnUserDepartment = new  CpnUserDepartment();
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setUser_name(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setGender(cellValue.toString().equals("男")?1:0);
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setMobile(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setEmail(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setDepartment_id(1l);
                    }
                    if(cellIterator.hasNext()){
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setUpdate_at(Long.valueOf(cellValue.toString().substring(0,cellValue.toString().length()-2)));
                    }
                    System.out.println(cpnUserDepartment);
                    //cpnUserDepartmentMapper.insertSelective(cpnUserDepartment);
                    cpnUserDepartmentList.add(cpnUserDepartment);
                }
            }
            return cpnUserDepartmentList;
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
