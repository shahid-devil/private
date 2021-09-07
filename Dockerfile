FROM fusuf/whatsasena:latest

RUN git clone https://github.com/RavinduManoj/private /root/QueenSewWhatsappBot
RUN mv /root/bottus/* /root/whatsAsena/
WORKDIR /root/QueenSewWhatsappBot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sew.js"]
