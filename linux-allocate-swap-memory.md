Allow swap memory (Incase of low ram) (https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04)

```
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

```
ls -lh /swapfile
```
