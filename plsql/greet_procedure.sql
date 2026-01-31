-- Learning PL/SQL: very basic procedure
-- I'm not great at this yet, but showing up every day

CREATE OR REPLACE PROCEDURE say_hello(p_name IN VARCHAR2) AS
BEGIN
  DBMS_OUTPUT.PUT_LINE('Hello, ' || p_name || '! Keep trying every day.');
END say_hello;
/

-- How to run (for testing in SQL*Plus or SQL Developer):
-- EXEC say_hello('Alenti');
