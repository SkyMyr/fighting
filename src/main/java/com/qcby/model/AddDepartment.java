package com.qcby.model;

public class AddDepartment {
    private String department_name;
    private String company_name;
    private String department_describe;

    public String getDepartment_name() {
        return department_name;
    }

    public void setDepartment_name(String department_name) {
        this.department_name = department_name;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public String getDepartment_describe() {
        return department_describe;
    }

    public void setDepartment_describe(String department_describe) {
        this.department_describe = department_describe;
    }

    @Override
    public String toString() {
        return "AddDepartment{" +
                "department_name='" + department_name + '\'' +
                ", company_name='" + company_name + '\'' +
                ", department_describe='" + department_describe + '\'' +
                '}';
    }
}
