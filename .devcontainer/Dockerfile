FROM alpine

RUN apk add --no-cache --update sudo git bash nodejs npm

RUN sudo npm i -g netlify-cli

RUN addgroup -g 1337 vscode && \
    adduser -D -s /bin/bash -G vscode -u 1337 vscode && \
    echo "vscode ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/vscode && \
    chmod 0440 /etc/sudoers.d/vscode