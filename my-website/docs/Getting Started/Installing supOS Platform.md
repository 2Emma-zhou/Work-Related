---

sidebar_position: 3

---

## Preparation

✅A Ubuntu 20.04.2 server for supOS<br/>
✅A Windows server for X-Collector <br/>
✅A USB dongle burned with authorization file or just an authorization file<br/>

<img className="medium-zoom-image" src="https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/90..png" />

## Authorization Management

The platform can authorize the dongle through a USB or an authorization file.


### Generating Authorization Files

:::warning
- The authorization file collects the server fingerprint and is bound with the current ubuntu system and network environment.
- Reinstall the system will invalidate it, migrate the authorization before reinstalling the system. For details, see <a href="Appendix/Migrate Authorization">Migrate Authorization</a>.
:::

1. Access "http://server IP:1947" through a browser, and then log in to the authorization back-end.
2. Click the **Sentinel Keys** tab on the left, and then click **Fingerprint** to generate and download fingerprint_xxx.c2v the authorization file.

![Authorization file](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/90..png)



3. Send the file to technical support for authorization and then get the authorized .v2c file.

4. Select the **Update/Attach** tab on the left, and then click **Select File**, upload the .v2c file.

5. Check the authorization result under the **Sentinel Keys** tab.

![Authorization result](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/91.png)

### Installing Authorization Dongle

Install the authorization dongle on the server.

1. Insert the dongle into the server.
:::info
If the supOS is installed on a virtual machine, make sure the dongle can be recognized on the VM management software. For details, see the corresponding manual.
:::

4. Run `lsusb` command to list all USB devices connected to the server. <br/>
The dongle is successfully installed if the following figure shows.
![Dongle installation](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/92.png)

## Install and configure Ubuntu Server

### Installing Server

1. Get [Ubuntu 20.04.2 Server iso](http://old-releases.ubuntu.com/releases/20.04.2/ubuntu-20.04.2-live-server-amd64.iso)

2. Proceed installation and mount 2 lvms as follow:

    1. at least 1.2T mount at /volumes

    2. at least 200G mount at /home/supos/supos

![Ubuntu LVM](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/ubuntu_LVM.png)

### Configuring Server

1. Enable root account

    1. Open SSH configuration file.

      `sudo vi /etc/ssh/sshd_config`

      ![Ubuntu LVM](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/60.png)

    2. Press ESC to exit editing and then enter `:wq` to save the file.

    3. Restart the service.

      `service sshd restart`
    
    4. Set the password of the root account.
      
      `sudo passwd`

    5. Switch to root account.

      ` sudo su`

2. Turn off the swap partition of the server

    1. Open the configuration file.

     `vi /etc/fstab`

    2. Comment out the line with swap (add a #)

    3. Press ESC to exit editing and then enter `:wq` to save the file.

3. Install tools.

  `apt install sysstat net-tools sysbench fio zip`

4. Configure the non-loopback address.
    
    1. Delete /etc/resolv.conf.
    
      `rm -f /etc/resolv.conf`
    
    2. Open the /etc/resolv.conf file, press i to start editing and add a nameserver.

      `sudo vi /etc/resolv.conf`

5. Turn off the default firewall.

  `sudo ufw disable`


## Installing supOS Platform

1. Create directories under /home on the server for supOS installation package and the platform.

    - /home/supOS/supOS/downloads: For the installation package.
    
    - /home/supOS/supOS/opt/supOS: For supOS platform.

2. Copy the installation package to the created directory.

    `cp xxx/supOS-V4.xx.xx.xx-C-xxxxxx.zip /home/supOS/supOS/downloads`

3. Decompress the package to /home/supOS/supOS/opt/supOS.

    `cd /home/supOS/supOS/downloads`
    
    `unzip supOS-V4.xx.xx.xx-C-xxxxxx.zip -d /home/supOS/supOS/opt/supOS`

4. Install supOS.

  `sudo bash install.sh`

5. Check the service status after installation.

  `kubectl get po`

:::info

<ul>
<li>supOS will automatically start after installation. You can also manually start by <code>sudo bash start.sh</code> under <b>home/supos/supos/bin</b> folder. It takes at least 300 s to start the whole system.</li>
<li>You can ONLY stop supOS system using <code>sudo bash stop.sh</code> under <b>home/supos/supos/bin</b> folder</li>
</ul>

:::

## Uninstalling supOS Platform
You can select to only delete the programme file without clearing data or delete all data when uninstalling the platform from the server.
:::info

Once you uninstall the programme, the original configuration files such as “env.sh” and “dlake.json” will be backed up and renamed to “env-xxxxxxxx.sh” and “dlake-xxxxxxxx.json” respectively. Rename them to the original names when installing the platform with the original configurations.

:::

- Uninstall supOS platform.
1. Switch to the bin directory under the supOS platform installation path.
    
      `cd /home/supOS/supOS/opt/supOS/bin`

2. Uninstall the programme and wait for it to finish.
      
      `sudo bash uninstall.sh`

- Uninstall the programme and clear all data.

1. Switch to the bin directory under the supOS platform installation path.

      `cd /home/supOS/supOS/opt/supOS/bin`

2. Uninstall the programme and clear all data.

      `sudo bash clean-all.sh`
