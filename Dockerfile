FROM wejs/wejs:v1.1.0

COPY . /usr/src/app
RUN npm install --production

CMD ["npm", "start"]