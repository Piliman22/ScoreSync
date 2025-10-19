# ScoreSync
## Feature
When the usc file or sus file is updated, it will automatically update sonolus' as well.

## Usage

1. Download release.zip from the [releases](https://github.com/Piliman22/ScoreSync/releases) page and extract it.

2. Create a new folder (with any name) inside the levels directory, and add a .usc (or .sus), .mp3, and .png file into it.

3. Launch scoresync.exe.

4. You will see "go to server https://~~~", open your browser it and scan the QR code with your device that has Sonolus installed to add it.

## FAQ

Q. I can't connect to the server.

A. Check your firewall settings, make sure you're on the same network, and verify the IP address. For the IP address, run `ipconfig` in Command Prompt and check if the IP address is correct. Sometimes the script may not retrieve the IP address properly depending on the device, so using the IP address from `ipconfig` may work better.

Q. I get an error like "Failed to run command: exec: "C:\Users\Username\AppData\Local\Temp/caxa/applications/scoresync\ez38qywxjw/0/node_modules/.bin/node": file does not exist" or the application closes immediately after opening.

A. Go to "C:\Users\Username\AppData\Local\Temp/caxa/applications/" and delete the scoresync folder. This is just an error caused by accumulated temporary files.

## Caution
> [!CAUTION]
> Do not touch the lib folder. It will cause bugs.

## Recommended Versions

Since Sonolus has added advertising features, if you want to continue using it efficiently, we recommend using Sonolus version **0.9.0** and ScoreSync version [**0.0.8**](https://github.com/Piliman22/ScoreSync/releases/tag/0.0.8).

## Docker Image

### Usage

1. Make sure Docker is installed. If it's not installed, you can download it from the [official website](https://www.docker.com/).

2. Run the following command to pull the image from Docker Hub:

```bash
docker pull pim4n/scoresync:latest
```

## Thanks
[sonolus-pjsekai-engine-extended](https://github.com/sevenc-nanashi/sonolus-pjsekai-engine-extended?tab=readme-ov-file)

## 特徴
uscファイル、susファイルが更新されたら、自動でsonolusのも更新します

## 使い方
1. [リリース](https://github.com/Piliman22/ScoreSync/releases)から、release.zipをダウンロードし、展開してください。

2. levelsの中に新しいフォルダ(名前は自由に)を作り、その中に、.usc(もしくは.sus),.mp3,.pngを追加してください。

3. scoresync.exeを起動してください。

4. go to server https://~~~とあるので、それをブラウザで開き、Sonolusの入っている端末でQRコードを読み込んで開いて追加してください。

## よくある質問

Q. サーバーに入れません。

A. ファイアウォール周り、同じネットワークか、ipアドレスを見てください。ipアドレスについては、コマンドプロンプトで`ipconfig`とうち、そこでipアドレスがあってるかどうかを確認してください。端末によってはスクリプトから取得がうまく行っていない場合があるので`ipconfig`から出てきたほうのipアドレスを使うことでうまくいく場合があります

Q. Failed to run command: exec: "C:\Users\Username\AppData\Local\Temp/caxa/applications/scoresync\ez38qywxjw/0/node_modules/.bin/node": file does not exist のようなエラー　もしくは、開いたら一瞬で閉じます

A. "C:\Users\Username\AppData\Local\Temp/caxa/applications/"に行き、scoresyncフォルダを削除してください。一時ファイルがたまっただけのエラーです。

## 注意
> [!CAUTION]
> libフォルダは基本触らないでください。バグります。

## 推奨バージョン

Sonolusに広告機能が入りましたので、もし効率よく今後も使いたい場合Sonolusのバージョン**0.9.0**を使い、ScoreSyncのバージョン[**0.0.8**](https://github.com/Piliman22/ScoreSync/releases/tag/0.0.8)を使うことを推奨します

## Docker Image

### 使い方

1. Dockerがインストールされていることを確認してください。インストールされていない場合は、[公式サイト](https://www.docker.com/)からインストールしてください。

2. 以下のコマンドを実行して、Docker Hubからイメージを取得します。

```bash
docker pull pim4n/scoresync:latest
```

## Thanks
[sonolus-pjsekai-engine-extended](https://github.com/sevenc-nanashi/sonolus-pjsekai-engine-extended?tab=readme-ov-file)