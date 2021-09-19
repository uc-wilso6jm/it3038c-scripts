function getIP {
    (Get-NetIPAddress).IPv4Address | Select-String "192"
}

$IP = getIP
$USER = $env:USERNAME
$HOSTNAME = $env:COMPUTERNAME
$PV = $HOST.Version.Major
$DATE = Get-Date -Format "dddd MM/dd/yyyy"
$BODY = "This machine's IP is $IP, User is $USER, Hostname is $HOSTNAME, Powershell Version $PV, Today's Date is $DATE."

"$BODY" | Out-file -FilePath .\SysInfo.txt 

#Mail command kept timing out and wouldn't work
#Send-MailMessage -To wilso6jm@mail.uc.edu -From jarod.wilson51@gmail.com -Subject "IT3038c Windows SysInfo" -Body $BODY -SmtpServer smtp.google.com -port 587 -UseSSL -Credential (Get-Credential)