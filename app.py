# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(24)

FACEBOOK_APP_ID = "1004022183136902"
LINE_CHANNEL_ID = "1617118616"
LINE_STATE = "12345abcde"

STATIC_FILE_VERSION = json.load(open("static_file_version.json", "r")).get("version")

@app.route("/", methods=["GET"])
def get():
    return render_template(
        "index.html",
        static_file_version=STATIC_FILE_VERSION,
        facebook_app_id=FACEBOOK_APP_ID,
        line_channel_id=LINE_CHANNEL_ID,
        line_state=LINE_STATE
    )


@app.route("/", methods=["POST"])
def facebooktest():
    token = request.args.get("token")
    open_id_type = request.args.get("open_id_type")
    print token
    print open_id_type
    return render_template(
        "index.html",
        static_file_version=STATIC_FILE_VERSION,
        facebook_app_id=FACEBOOK_APP_ID,
        line_channel_id=LINE_CHANNEL_ID,
        line_state=LINE_STATE
    )


@app.route("/linetest", methods=["GET"])
def linetest():
    code = request.args.get("code")
    state = request.args.get("state")
    open_id_type = request.args.get("open_id_type")
    print code
    print state == LINE_STATE
    print open_id_type
    return render_template(
        "index.html",
        static_file_version=STATIC_FILE_VERSION,
        facebook_app_id=FACEBOOK_APP_ID,
        line_channel_id=LINE_CHANNEL_ID,
        line_state=LINE_STATE
    )


if __name__ == "__main__":
    app.run()
