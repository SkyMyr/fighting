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

    /**
     * 部门员工excel表解析成实体列表
     * @param inp excel表的inputstream数据类型格式
     * @return 部门员工实体列表
     * @throws IOException
     * @throws InvalidFormatException
     */
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
                    if (rowIndex ==0)//跳过第一行列名
                    {
                        continue;
                    }
                    row =sheet.getRow(rowIndex);
                    Iterator<Cell> cellIterator = row.cellIterator();
                    CpnUserDepartment cpnUserDepartment = new  CpnUserDepartment();
                    if(cellIterator.hasNext()){//放入名字
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setUser_name(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){//放入性别
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setGender(cellValue.toString().equals("男")?1:0);
                    }
                    if(cellIterator.hasNext()){//放入手机号
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setMobile(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){//放入邮箱
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setEmail(cellValue.toString());
                    }
                    if(cellIterator.hasNext()){//放入所属部门
                        Cell cell = cellIterator.next();
                        Object cellValue = getCellValue(cell);
                        cpnUserDepartment.setDepartment_id(1l);
                    }
                    if(cellIterator.hasNext()){//放入用户原ID(这里废弃,应该是通过手机号第一次导入的时候查询对应的APP端原id放入数据库,方便以后查询对应的APP端信息,可以减少一次系统间IO读写)
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
