# Create a ubuntu service for jar execution.
a. Create my-application.service file in `/etc/systemd` folder

```sh
Description=my-application
After=syslog.target
[Service]
ExecStart=/usr/bin/java -jar /path/../xyz-0.0.1-SNAPSHOT.jar

[Install]
WantedBy=multi-user.target
```

b. Start application

```sh
systemctl daemon-reload
sudo systemctl enable my-application.service
systemctl start invoice-application
```

c. Check logs

```sh
journalctl -u my-application.service
```
