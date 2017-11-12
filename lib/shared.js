module.exports = {
  device : {
    name: 'Xbee Light',
    protocol: 'radio',
    service: 'radioemitterXbee',
    identifier: '13A20040AFDCA1'
  },
  deviceTypes : [{
      type: 'binary',
      sensor: false,
      min: 0,
      max: 1,
      display: true
    }]
}
