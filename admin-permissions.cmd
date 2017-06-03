:: Give adminstrator rights to all files in current folder.


TAKEOWN /F .
ICACLS . /grant administrators:F
