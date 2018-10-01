## Init DB

```init usr/local/var/postgres```

## Start/Stop PostGres Server

```pg_ctl -D /usr/local/var/postgres -l logfile start```

```pg_ctl -D /usr/local/var/postgres -l logfile stop```


Issues:

"npm ERR! Test failed"
Solution:
https://github.com/facebook/create-react-app/issues/2770#issuecomment-322626300
```rm -rf node_modules/ && rm package-lock.json && npm install```
