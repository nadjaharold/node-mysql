# Node.js × MySQL

## MEMO

```bash
# 状態確認
mysql.server status
# 起動
mysql.server start
# 停止
mysql.server stop
# ログイン(root user)
mysql --user=root --password
# ログアウト
exit;
# バージョン確認
mysql --version
# DB確認
show databases;
# DB作成
create database *******;
# DB選択
use *******;
# テーブル一覧
show tables;
# テーブル作成
CREATE TABLE users (id INT AUTO_INCREMENT, name TEXT, PRIMARY KEY (id));
# テーブル詳細確認
DESCRIBE users;
# データ取得
SELECT * FROM users;
# データ挿入
INSERT INTO users(name) VALUES ('にんじゃわんこ');
# テーブル削除
DROP TABLE users;
# DB削除
DROP DATABASE *******

```

## REFERENCE

- [MySQL の開発環境を用意（macOS）](https://prog-8.com/docs/mysql-env)
- [MySQL でデータベースを作成](https://prog-8.com/docs/mysql-database-setup)
- [MySQL 公式ドキュメント 構文一覧](https://dev.mysql.com/doc/refman/5.6/ja/create-table.html)
- [Node.js アプリケーションと MySQL を接続](https://prog-8.com/docs/nodejs-mysql)
- [MySQL, Laravel in Mac](https://reffect.co.jp/laravel/mysql-laravel-in-mac)
- [Node.js の MySQL で Async/Await で接続する](https://thr3a.hatenablog.com/entry/20200817/1597650222)
