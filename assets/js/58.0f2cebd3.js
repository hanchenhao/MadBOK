(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{443:function(a,s,t){"use strict";t.r(s);var e=t(54),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"数据编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据编码"}},[a._v("#")]),a._v(" 数据编码")]),a._v(" "),t("p",[a._v("数据编码是通过计算机程序来处理数据，借以实现数据加工、数据分析、数据应用等目的。数据开发要充分的理解项目商业目标或要求，在开发前梳理项目目标以及分析范围，最终确定分析维度。确定分析维度后要将明确对于数据的要求，根据要求查找数据源，根据分析目的确定分析指标维度的颗粒度，再根据颗粒度统计各类度量参数，制作中间表，最后合并中间表形成完整的分析数据报表。")]),a._v(" "),t("p",[a._v("在数据编码的过程中要注意编程质量控制，比如数据质量、程序的规范性、逻辑正确性等等。在保障开发质量的过程中要统一编程规范，尽量让程序易于复用，易于管理和维护。进行充分的数据分析，也是保障数据开发质量的必要手段。")]),a._v(" "),t("h2",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[a._v("#")]),a._v(" SQL")]),a._v(" "),t("p",[a._v("SQL是结构化查询语言的简称，是数据编程和数据分析的必备工具。SQL集数据定义DDL、数据操作DML和数据控制DCL于一体，可以完成关系型数据库中的全部工作。SQL既可以直接通过命令与数据进行交互，也可以嵌入到Java、Python等主流语言中使用。")]),a._v(" "),t("h3",{attrs:{id:"ddl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddl"}},[a._v("#")]),a._v(" DDL")]),a._v(" "),t("p",[a._v("DDL（Data Definition Language）是指数据定义语言，用于创建、修改、删除数据库中的对象，常见的命令有：")]),a._v(" "),t("ul",[t("li",[a._v("CREATE：创建")]),a._v(" "),t("li",[a._v("ALTER：修改")]),a._v(" "),t("li",[a._v("DROP：删除")]),a._v(" "),t("li",[a._v("TRUNCATE：清空操作")]),a._v(" "),t("li",[a._v("COMMENT：备注处理")]),a._v(" "),t("li",[a._v("RENAME：重命名")])]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("CREATE DATABASE")]),a._v("命令可以创建数据库,创建数据库时命名要遵循固定规则，不能与其他数据库重名，名称不能单独使用数字，最长可以为64字符，不推荐使用关键字作为数据库名和表名，"),t("strong",[a._v("如下是创建一个数据库和删除数据库的命令")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("not")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exists")]),a._v(" mysql_test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exists")]),a._v(" mysql_test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("code",[a._v("CREATE TABLE")]),a._v(" 是创建表的关键字，在建表的语法结构中，"),t("code",[a._v("table_name")]),a._v(" 是新表的名称。括号中列出了表中的每一列，每一列由列名、数据类型和约束组成，多个列之间用逗号分隔。PRIMARY KEY 约束用于定义主键，可以由一个或多个列组成。主键列的值必须唯一且不能为空。")]),a._v(" "),t("p",[t("strong",[a._v("创建新表")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("not")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exists")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  column1 datatype constraints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  column2 datatype constraints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  column3 datatype constraints"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("one_or_more_columns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" COMMMENT"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'remark'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("修改表的语法结构主要使用 "),t("code",[a._v("ALTER TABLE")]),a._v(" 关键字。常见的修改表的操作包括添加新列、修改列的数据类型、删除列以及添加约束等。")]),a._v(" "),t("p",[t("strong",[a._v("添加新列")]),a._v("：其中，"),t("code",[a._v("table_name")]),a._v(" 是要修改的表名，"),t("code",[a._v("column_name")]),a._v(" 是新列的名称，"),t("code",[a._v("data_type")]),a._v(" 是新列的数据类型，"),t("code",[a._v("constraint")]),a._v(" 是该列的约束条件（可选）。")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" column_name data_type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("constraint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("修改列的数据类型")]),a._v("：其中，"),t("code",[a._v("table_name")]),a._v(" 是要修改的表名，"),t("code",[a._v("column_name")]),a._v(" 是要修改的列名，"),t("code",[a._v("new_data_type")]),a._v(" 是该列的新数据类型。")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MODIFY")]),a._v(" column_name new_data_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("删除列")]),a._v("：其中，"),t("code",[a._v("table_name")]),a._v(" 是要修改的表名，"),t("code",[a._v("column_name")]),a._v(" 是要删除的列名。")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DROP")]),a._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("添加约束")]),a._v("：其中，"),t("code",[a._v("table_name")]),a._v(" 是要修改的表名，"),t("code",[a._v("constraint_name")]),a._v(" 是约束的名称，"),t("code",[a._v("constraint_type")]),a._v(" 是约束的类型（如 "),t("code",[a._v("PRIMARY KEY")]),a._v("、"),t("code",[a._v("FOREIGN KEY")]),a._v(" 等），"),t("code",[a._v("column_name")]),a._v(" 是要约束的列名。")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CONSTRAINT")]),a._v(" constraint_name constraint_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"dml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dml"}},[a._v("#")]),a._v(" DML")]),a._v(" "),t("p",[a._v("DML（Data Manipulation Language）：是指数据操作语言，常用于对数据库表中的数据进行新增、删除和修改操作。常用的命令为：")]),a._v(" "),t("ul",[t("li",[a._v("INSERT：插入")]),a._v(" "),t("li",[a._v("DELETE：删除")]),a._v(" "),t("li",[a._v("UPDATE：更新")])]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("INSERT INTO")]),a._v("语句可以向表中插入一行数据，也可以插入多行数据，一次插入多行各行使用"),t("code",[a._v(",")]),a._v("进行分割，如下所示：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" students "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" gender"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Tom'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("这条语句将在 "),t("code",[a._v("students")]),a._v(" 表中插入一行数据，该行数据包含 "),t("code",[a._v("name")]),a._v("、"),t("code",[a._v("age")]),a._v(" 和 "),t("code",[a._v("gender")]),a._v(" 三个列的值，其中 "),t("code",[a._v("name")]),a._v(" 列的值为 'Tom'，"),t("code",[a._v("age")]),a._v(" 列的值为 18，"),t("code",[a._v("gender")]),a._v(" 列的值为 'Male'。需要注意的是，插入的值必须按照列的顺序对应，即第一个值对应第一个列，第二个值对应第二个列，以此类推。")]),a._v(" "),t("p",[t("code",[a._v("UPDATE")]),a._v(" 是一条用于更新表中数据的 SQL 语句，"),t("code",[a._v("SET")]),a._v(" 则是 "),t("code",[a._v("UPDATE")]),a._v(" 语句中的一个子句，用于指定要更新的列以及它们的新值。下面是 UPDATE 和 SET 语句的语法结构：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" column1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" column2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("其中，"),t("code",[a._v("table_name")]),a._v(" 是要更新的表名，column1 = value1, column2 = value2, ... 是要更新的列和它们的新值，多个列和值之间用逗号分隔。"),t("code",[a._v("WHERE")]),a._v(" 子句是可选的，用于指定要更新哪些行。如果省略 "),t("code",[a._v("WHERE")]),a._v(" 子句，将更新表中的所有行。")]),a._v(" "),t("p",[t("code",[a._v("DELETE")]),a._v(" 是一条用于删除表中数据的 SQL 语句，可以删除一行或多行数据。下面是 DELETE 语句的语法结构：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DELETE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("其中，table_name 是要删除数据的表名，WHERE 子句是可选的，用于指定要删除哪些行。如果省略 WHERE 子句，将删除表中的所有行。因此，在删除数据时，务必要谨慎使用 DELETE 语句，并确保使用 WHERE 子句来指定要删除的行，以避免意外删除了表中不需要删除的数据。此外，删除数据时需要注意表中是否存在外键约束，如果存在外键约束，需要先删除依赖该行数据的其他表中的数据，再执行删除操作，否则会因为外键约束而无法删除。")]),a._v(" "),t("h3",{attrs:{id:"dql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dql"}},[a._v("#")]),a._v(" DQL")]),a._v(" "),t("p",[a._v("DQL（Data Query Language）是指数据查询语言，用于查询数据库表中的数据，其提供了数据筛选、字段运算、分组聚合、多表关联等功能。"),t("code",[a._v("SELECT")]),a._v(" 是最常用的 Data Query Language（DQL）语句，用于从一个或多个表中检索数据。下面是 "),t("code",[a._v("SELECT")]),a._v(" 语句的基本语法：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" condition "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ORDER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" column_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ASC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("column1, column2, ... 是要查询的列，可以指定多个列，用逗号分隔。"),t("code",[a._v("table_name")]),a._v(" 是要查询的表名，"),t("code",[a._v("WHERE")]),a._v(" 子句是可选的，用于指定查询条件，可以使用各种运算符和函数来构造查询条件。"),t("code",[a._v("ORDER BY")]),a._v(" 子句也是可选的，用于指定查询结果的排序方式，可以按升序（ASC）或降序（DESC）排序。在 "),t("code",[a._v("SELECT")]),a._v(" 语句中，还可以使用聚合函数（例如 SUM、AVG、MIN、MAX 和 COUNT）对数据进行汇总计算，也可以使用 GROUP BY 子句对查询结果进行分组。此外，还可以使用 "),t("code",[a._v("JOIN")]),a._v(" 语句将多个表连接起来，从而获取更多的数据。")]),a._v(" "),t("p",[t("code",[a._v("AS")]),a._v(" 关键字用于为查询结果中的列指定别名，从而方便后续处理。"),t("code",[a._v("column_name")]),a._v(" 是要查询的列名，"),t("code",[a._v("alias_name")]),a._v(" 是为该列指定的别名。使用 "),t("code",[a._v("AS")]),a._v(" 关键字是可选的，也可以直接在列名后面加上空格和别名，其语法为：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" column_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" alias_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" column_name alias_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("code",[a._v("DISTINCT")]),a._v(" 关键字用于去除查询结果中的重复行，只返回不同的行，"),t("code",[a._v("DISTINCT")]),a._v(" 关键字只能应用于整个行的比较，不能只针对某一列去重。另外，使用 DISTINCT 会增加查询的计算量，可能会影响查询性能。其语法为：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DISTINCT")]),a._v(" column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("code",[a._v("LIKE")]),a._v(" 关键字用于模糊搜索，使用"),t("code",[a._v("LIKE")]),a._v("关键字搜索条件时，模式字符中的所有字符都有意义，"),t("code",[a._v("LIKE")]),a._v("主要用于字符型数据，字符串内的英文和汉字都算一个字符，使用通配符"),t("code",[a._v("%")]),a._v("和下划线"),t("code",[a._v("_")]),a._v("匹配多个或一个字符，其语法为：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" column_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("LIKE")]),a._v(" pattern"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("code",[a._v("GROUP BY")]),a._v(" 关键字用于将查询结果按照指定的列进行分组，从而对分组后的数据进行聚合操作，"),t("code",[a._v("HAVING")]),a._v(" 关键字用于在分组后的数据上进行过滤操作，只返回符合条件的分组结果，"),t("code",[a._v("HAVING")]),a._v(" 关键字只能应用于分组后的数据上，如果要过滤掉不符合条件的行，应该使用 "),t("code",[a._v("WHERE")]),a._v(" 关键字。此外，由于 "),t("code",[a._v("GROUP BY")]),a._v(" 和 "),t("code",[a._v("HAVING")]),a._v(" 操作会对数据进行聚合和排序，可能会影响查询性能。因此，在使用这些操作时需要注意性能问题。其语法为：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" aggregate_function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" table_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" column_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("HAVING")]),a._v(" condition"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("code",[a._v("CASE")]),a._v(" 表达式用于在查询结果中根据条件返回不同的值，它按顺序逐个判断条件，并返回第一个符合条件的结果。如果没有符合条件的结果，则返回 ELSE 子句中指定的默认结果。下面是一个示例，查询 students 表中每个学生的成绩等级：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" score"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CASE")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHEN")]),a._v(" score "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("90")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("THEN")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'优秀'")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHEN")]),a._v(" score "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("THEN")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'良好'")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHEN")]),a._v(" score "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("60")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("THEN")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'及格'")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ELSE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'不及格'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("END")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AS")]),a._v(" grade\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("此查询将查询 "),t("code",[a._v("students")]),a._v(" 表中每个学生的姓名和成绩，并根据成绩判断其等级，返回一个新的名为 "),t("code",[a._v("grade")]),a._v(" 的列。如果成绩大于等于 90 分，返回字符串 '优秀'，如果成绩大于等于 80 分但小于 90 分，返回字符串 '良好'，如果成绩大于等于 60 分但小于 80 分，返回字符串 '及格'，否则返回字符串 '不及格'。")]),a._v(" "),t("p",[t("code",[a._v("UNION")]),a._v(" 用于将多个 SELECT 查询的结果合并成一个结果集。当我们需要查询两个或多个表的数据，且这些表具有相同的字段结构，那么可以使用 "),t("code",[a._v("UNION")]),a._v(" 操作符来合并它们的查询结果。假设有两个表"),t("code",[a._v("employees1")]),a._v(" 和 "),t("code",[a._v("employees2")]),a._v("，它们的字段结构相同，每个表中都包含了员工的 ID、姓名和薪资信息，我们希望将它们的数据合并成一个结果集，可以使用 "),t("code",[a._v("UNION")]),a._v(" 操作符：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" salary "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" employees1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UNION")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" salary "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" employees2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("上述查询首先从 "),t("code",[a._v("employees1")]),a._v(" 表中选取 ID、姓名和薪资这三个列，然后将其和从 "),t("code",[a._v("employees2")]),a._v(" 表中选取的相同三个列的数据合并起来，去除其中的重复行，最后返回一个包含了所有记录的结果集。需要注意的是，"),t("code",[a._v("UNION")]),a._v(" 操作符要求两个查询返回的列数和数据类型必须相同。如果想要保留重复行，可以使用 "),t("code",[a._v("UNION ALL")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("JOIN")]),a._v(" 是最常用的用于连接多个表的关键字之一。它允许我们在不同的表之间建立关联关系，并且可以根据指定的条件将这些表中的数据进行组合，返回一个包含所有相关数据的结果集。"),t("code",[a._v("JOIN")]),a._v(" 关键字可以与其他几个关键字组合使用，主要包括以下几种类型的 "),t("code",[a._v("JOIN")]),a._v("：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("INNER JOIN")]),a._v(": 返回两个表中满足指定条件的交集。")]),a._v(" "),t("li",[t("code",[a._v("LEFT JOIN")]),a._v(": 返回左表中的所有记录，以及右表中满足指定条件的匹配记录（如果有）。")]),a._v(" "),t("li",[t("code",[a._v("RIGHT JOIN")]),a._v(": 返回右表中的所有记录，以及左表中满足指定条件的匹配记录（如果有）。")]),a._v(" "),t("li",[t("code",[a._v("FULL OUTER JOIN")]),a._v("（MySQL 不支持）：返回左表和右表中的所有记录，如果某个记录在另一个表中没有匹配记录，则用 NULL 填充。")])]),a._v(" "),t("p",[a._v("假设有两个表 "),t("code",[a._v("employees")]),a._v(" 和 "),t("code",[a._v("departments")]),a._v("，"),t("code",[a._v("employees")]),a._v(" 表包含了员工的信息，包括 ID、姓名、所属部门的 ID 等信息，而 "),t("code",[a._v("departments")]),a._v(" 表包含了部门的信息，包括 ID 和名称等信息。我们需要查询出所有员工的姓名和所在部门的名称，可以使用 "),t("code",[a._v("INNER JOIN")]),a._v(" 关键字连接两个表，查询语句如下：")]),a._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" employees"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" departments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("department_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" employees\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INNER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("JOIN")]),a._v(" departments\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" employees"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("department_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" departments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);