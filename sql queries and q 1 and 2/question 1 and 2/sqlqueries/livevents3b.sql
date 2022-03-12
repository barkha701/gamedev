SELECT *
FROM eventmanagement
WHERE (Eventstarttime > DATEADD(minute,-10, SYSDATETIME()) and Eventendtime > SYSDATETIME())
