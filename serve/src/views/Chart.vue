<template>
  <div id="app" align="center">
    <input list="cars" @keyup.enter="drawPie(pmname)" v-model="pmname" placeholder="短横线'-'后的部分请输入英文,例如:胡地-Mega,洛托姆-Wash" size="50">
    <datalist id="cars">
      <option v-for='item in compare' :key='item[0]'>
        {{item[2]}}
      </option>
      <option v-for='item in compare' :key='1000 + item[0]'>
        {{item[1]}}
      </option>
    </datalist>
    <button @click="drawPie(pmname)">查询</button>
    <br>
    <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

export default {
  // mounted () {
  //   this.$nextTick(function () {
  //     this.drawPie('main')
  //   })
  // }
  methods: {
    ctoe (pmname) {
      // 输入的中文转英文
      if (pmname.indexOf('-') >= 0) {
        let pmname1 = pmname.substring(0, pmname.indexOf('-'))
        this.compare.map(e => {
          if (e[2] === pmname1) {
            pmname1 = e[1]
          }
        })
        pmname = pmname1 + pmname.substring(pmname.indexOf('-'), pmname.length)
      } else {
        this.compare.map(e => {
          if (e[2] === pmname) {
            pmname = e[1]
          }
        })
      }
      return pmname
    },
    drawPie (pmname) {
      var that = this
      var myChart = this.$echarts.init(document.getElementById('main'))
      pmname = this.ctoe(pmname)
      this.$axios.get('usage.json').then(function (ret) {
        var data = ret.data
        // 如果是后世代宝可梦不加前代的线防止map函数报错
        var ser = []
        if (typeof (data.G1[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G1',
              type: 'line',
              color: ['yellow'],
              data: data.G1[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G2',
              type: 'line',
              color: ['blue'],
              data: data.G2[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G3',
              type: 'line',
              color: ['green'],
              data: data.G3[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G4',
              type: 'line',
              color: ['black'],
              data: data.G4[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G5',
              type: 'line',
              color: ['gray'],
              data: data.G5[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G6',
              type: 'line',
              color: ['red'],
              data: data.G6[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else if (typeof (data.G2[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G2',
              type: 'line',
              color: ['blue'],
              data: data.G2[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G3',
              type: 'line',
              color: ['green'],
              data: data.G3[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G4',
              type: 'line',
              color: ['black'],
              data: data.G4[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G5',
              type: 'line',
              color: ['gray'],
              data: data.G5[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G6',
              type: 'line',
              color: ['red'],
              data: data.G6[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else if (typeof (data.G3[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G3',
              type: 'line',
              color: ['green'],
              data: data.G3[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G4',
              type: 'line',
              color: ['black'],
              data: data.G4[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G5',
              type: 'line',
              color: ['gray'],
              data: data.G5[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G6',
              type: 'line',
              color: ['red'],
              data: data.G6[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else if (typeof (data.G4[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G4',
              type: 'line',
              color: ['black'],
              data: data.G4[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G5',
              type: 'line',
              color: ['gray'],
              data: data.G5[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G6',
              type: 'line',
              color: ['red'],
              data: data.G6[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else if (typeof (data.G5[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G5',
              type: 'line',
              color: ['gray'],
              data: data.G5[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G6',
              type: 'line',
              color: ['red'],
              data: data.G6[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else if (typeof (data.G6[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G6',
              type: 'line',
              color: ['red'],
              data: data.G6[pmname].map(function (item) {
                return item[1]
              })
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else if (typeof (data.G7[pmname]) !== 'undefined') {
          ser = [
            {
              type: 'line',
              color: ['black'],
              markLine: {
                silent: true,
                data: [{
                  yAxis: 3.41
                }]
              }
            },
            {
              name: 'G7',
              type: 'line',
              color: ['purple'],
              data: data.G7[pmname].map(function (item) {
                return item[1]
              })
            }
          ]
        } else {
          that.pmname = '查询无结果'
        }
        myChart.setOption({
          title: {
            text: 'Usage'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7']
          },
          xAxis: {
            data: data.G7[pmname].map(function (item) {
              return item[0]
            })
          },
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %'
              },
              show: true
            }
          ],
          toolbox: {
            feature: {
              dataZoom: {
                xAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [{
            startValue: '2017-01'
          }, {
            type: 'inside'
          }],
          // 多条线
          series: ser
        }, true)
      })
    }
  },
  data () {
    return {
      pmname: '',
      compare: [
        ['001', 'Bulbasaur', '妙蛙种子'],
        ['002', 'Ivysaur', '妙蛙草'],
        ['003', 'Venusaur', '妙蛙花'],
        ['004', 'Charmander', '小火龙'],
        ['005', 'Charmeleon', '火恐龙'],
        ['006', 'Charizard', '喷火龙'],
        ['007', 'Squirtle', '杰尼龟'],
        ['008', 'Wartortle', '卡咪龟'],
        ['009', 'Blastoise', '水箭龟'],
        ['010', 'Caterpie', '绿毛虫'],
        ['011', 'Metapod', '铁甲蛹'],
        ['012', 'Butterfree', '巴大蝶'],
        ['013', 'Weedle', '独角虫'],
        ['014', 'Kakuna', '铁壳蛹'],
        ['015', 'Beedrill', '大针蜂'],
        ['016', 'Pidgey', '波波'],
        ['017', 'Pidgeotto', '比比鸟'],
        ['018', 'Pidgeot', '大比鸟'],
        ['019', 'Rattata', '小拉达'],
        ['020', 'Raticate', '拉达'],
        ['021', 'Spearow', '烈雀'],
        ['022', 'Fearow', '大嘴雀'],
        ['023', 'Ekans', '阿柏蛇'],
        ['024', 'Arbok', '阿柏怪'],
        ['025', 'Pikachu', '皮卡丘'],
        ['026', 'Raichu', '雷丘'],
        ['027', 'Sandshrew', '穿山鼠'],
        ['028', 'Sandslash', '穿山王'],
        ['029', 'Nidoran♀', '尼多兰'],
        ['030', 'Nidorina', '尼多娜'],
        ['031', 'Nidoqueen', '尼多后'],
        ['032', 'Nidoran♂', '尼多朗'],
        ['033', 'Nidorino', '尼多力诺'],
        ['034', 'Nidoking', '尼多王'],
        ['035', 'Clefairy', '皮皮'],
        ['036', 'Clefable', '皮可西'],
        ['037', 'Vulpix', '六尾'],
        ['038', 'Ninetales', '九尾'],
        ['039', 'Jigglypuff', '胖丁'],
        ['040', 'Wigglytuff', '胖可丁'],
        ['041', 'Zubat', '超音蝠'],
        ['042', 'Golbat', '大嘴蝠'],
        ['043', 'Oddish', '走路草'],
        ['044', 'Gloom', '臭臭花'],
        ['045', 'Vileplume', '霸王花'],
        ['046', 'Paras', '派拉斯'],
        ['047', 'Parasect', '派拉斯特'],
        ['048', 'Venonat', '毛球'],
        ['049', 'Venomoth', '摩鲁蛾'],
        ['050', 'Diglett', '地鼠'],
        ['051', 'Dugtrio', '三地鼠'],
        ['052', 'Meowth', '喵喵'],
        ['053', 'Persian', '猫老大'],
        ['054', 'Psyduck', '可达鸭'],
        ['055', 'Golduck', '哥达鸭'],
        ['056', 'Mankey', '猴怪'],
        ['057', 'Primeape', '火暴猴'],
        ['058', 'Growlithe', '卡蒂狗'],
        ['059', 'Arcanine', '风速狗'],
        ['060', 'Poliwag', '蚊香蝌蚪'],
        ['061', 'Poliwhirl', '蚊香君'],
        ['062', 'Poliwrath', '蚊香泳士'],
        ['063', 'Abra', '凯西'],
        ['064', 'Kadabra', '勇基拉'],
        ['065', 'Alakazam', '胡地'],
        ['066', 'Machop', '腕力'],
        ['067', 'Machoke', '豪力'],
        ['068', 'Machamp', '怪力'],
        ['069', 'Bellsprout', '喇叭芽'],
        ['070', 'Weepinbell', '口呆花'],
        ['071', 'Victreebel', '大食花'],
        ['072', 'Tentacool', '玛瑙水母'],
        ['073', 'Tentacruel', '毒刺水母'],
        ['074', 'Geodude', '小拳石'],
        ['075', 'Graveler', '隆隆石'],
        ['076', 'Golem', '隆隆岩'],
        ['077', 'Ponyta', '小火马'],
        ['078', 'Rapidash', '烈焰马'],
        ['079', 'Slowpoke', '呆呆兽'],
        ['080', 'Slowbro', '呆壳兽'],
        ['081', 'Magnemite', '小磁怪'],
        ['082', 'Magneton', '三合一磁怪'],
        ['083', 'Farfetch\'d', '大葱鸭'],
        ['084', 'Doduo', '嘟嘟'],
        ['085', 'Dodrio', '嘟嘟利'],
        ['086', 'Seel', '小海狮'],
        ['087', 'Dewgong', '白海狮'],
        ['088', 'Grimer', '臭泥'],
        ['089', 'Muk', '臭臭泥'],
        ['090', 'Shellder', '大舌贝'],
        ['091', 'Cloyster', '刺甲贝'],
        ['092', 'Gastly', '鬼斯'],
        ['093', 'Haunter', '鬼斯通'],
        ['094', 'Gengar', '耿鬼'],
        ['095', 'Onix', '大岩蛇'],
        ['096', 'Drowzee', '催眠貘'],
        ['097', 'Hypno', '引梦貘人'],
        ['098', 'Krabby', '大钳蟹'],
        ['099', 'Kingler', '巨钳蟹'],
        ['100', 'Voltorb', '霹雳电球'],
        ['101', 'Electrode', '顽皮雷弹'],
        ['102', 'Exeggcute', '蛋蛋'],
        ['103', 'Exeggutor', '椰蛋树'],
        ['104', 'Cubone', '卡拉卡拉'],
        ['105', 'Marowak', '嘎啦嘎啦'],
        ['106', 'Hitmonlee', '飞腿郎'],
        ['107', 'Hitmonchan', '快拳郎'],
        ['108', 'Lickitung', '大舌头'],
        ['109', 'Koffing', '瓦斯弹'],
        ['110', 'Weezing', '双弹瓦斯'],
        ['111', 'Rhyhorn', '独角犀牛'],
        ['112', 'Rhydon', '钻角犀兽'],
        ['113', 'Chansey', '吉利蛋'],
        ['114', 'Tangela', '蔓藤怪'],
        ['115', 'Kangaskhan', '袋兽'],
        ['116', 'Horsea', '墨海马'],
        ['117', 'Seadra', '海刺龙'],
        ['118', 'Goldeen', '角金鱼'],
        ['119', 'Seaking', '金鱼王'],
        ['120', 'Staryu', '海星星'],
        ['121', 'Starmie', '宝石海星'],
        ['122', 'Mr. Mime', '魔墙人偶'],
        ['123', 'Scyther', '飞天螳螂'],
        ['124', 'Jynx', '迷唇姐'],
        ['125', 'Electabuzz', '电击兽'],
        ['126', 'Magmar', '鸭嘴火兽'],
        ['127', 'Pinsir', '凯罗斯'],
        ['128', 'Tauros', '肯泰罗'],
        ['129', 'Magikarp', '鲤鱼王'],
        ['130', 'Gyarados', '暴鲤龙'],
        ['131', 'Lapras', '拉普拉斯'],
        ['132', 'Ditto', '百变怪'],
        ['133', 'Eevee', '伊布'],
        ['134', 'Vaporeon', '水伊布'],
        ['135', 'Jolteon', '雷伊布'],
        ['136', 'Flareon', '火伊布'],
        ['137', 'Porygon', '多边兽'],
        ['138', 'Omanyte', '菊石兽'],
        ['139', 'Omastar', '多刺菊石兽'],
        ['140', 'Kabuto', '化石盔'],
        ['141', 'Kabutops', '镰刀盔'],
        ['142', 'Aerodactyl', '化石翼龙'],
        ['143', 'Snorlax', '卡比兽'],
        ['144', 'Articuno', '急冻鸟'],
        ['145', 'Zapdos', '闪电鸟'],
        ['146', 'Moltres', '火焰鸟'],
        ['147', 'Dratini', '迷你龙'],
        ['148', 'Dragonair', '哈克龙'],
        ['149', 'Dragonite', '快龙'],
        ['150', 'Mewtwo', '超梦'],
        ['151', 'Mew', '梦幻'],
        ['152', 'Chikorita', '菊草叶'],
        ['153', 'Bayleef', '月桂叶'],
        ['154', 'Meganium', '大竺葵'],
        ['155', 'Cyndaquil', '火球鼠'],
        ['156', 'Quilava', '火岩鼠'],
        ['157', 'Typhlosion', '火暴兽'],
        ['158', 'Totodile', '小锯鳄'],
        ['159', 'Croconaw', '蓝鳄'],
        ['160', 'Feraligatr', '大力鳄'],
        ['161', 'Sentret', '尾立'],
        ['162', 'Furret', '大尾立'],
        ['163', 'Hoothoot', '咕咕'],
        ['164', 'Noctowl', '猫头夜鹰'],
        ['165', 'Ledyba', '芭瓢虫'],
        ['166', 'Ledian', '安瓢虫'],
        ['167', 'Spinarak', '圆丝蛛'],
        ['168', 'Ariados', '阿利多斯'],
        ['169', 'Crobat', '叉字蝠'],
        ['170', 'Chinchou', '灯笼鱼'],
        ['171', 'Lanturn', '电灯怪'],
        ['172', 'Pichu', '皮丘'],
        ['173', 'Cleffa', '皮宝宝'],
        ['174', 'Igglybuff', '宝宝丁'],
        ['175', 'Togepi', '波克比'],
        ['176', 'Togetic', '波克基古'],
        ['177', 'Natu', '天然雀'],
        ['178', 'Xatu', '天然鸟'],
        ['179', 'Mareep', '咩利羊'],
        ['180', 'Flaaffy', '茸茸羊'],
        ['181', 'Ampharos', '电龙'],
        ['182', 'Bellossom', '美丽花'],
        ['183', 'Marill', '玛力露'],
        ['184', 'Azumarill', '玛力露丽'],
        ['185', 'Sudowoodo', '树才怪'],
        ['186', 'Politoed', '蚊香蛙皇'],
        ['187', 'Hoppip', '毽子草'],
        ['188', 'Skiploom', '毽子花'],
        ['189', 'Jumpluff', '毽子棉'],
        ['190', 'Aipom', '长尾怪手'],
        ['191', 'Sunkern', '向日种子'],
        ['192', 'Sunflora', '向日花怪'],
        ['193', 'Yanma', '蜻蜻蜓'],
        ['194', 'Wooper', '乌波'],
        ['195', 'Quagsire', '沼王'],
        ['196', 'Espeon', '太阳伊布'],
        ['197', 'Umbreon', '月亮伊布'],
        ['198', 'Murkrow', '黑暗鸦'],
        ['199', 'Slowking', '呆呆王'],
        ['200', 'Misdreavus', '梦妖'],
        ['201', 'Unown', '未知图腾'],
        ['202', 'Wobbuffet', '果然翁'],
        ['203', 'Girafarig', '麒麟奇'],
        ['204', 'Pineco', '榛果球'],
        ['205', 'Forretress', '佛烈托斯'],
        ['206', 'Dunsparce', '土龙弟弟'],
        ['207', 'Gligar', '天蝎'],
        ['208', 'Steelix', '大钢蛇'],
        ['209', 'Snubbull', '布鲁'],
        ['210', 'Granbull', '布鲁皇'],
        ['211', 'Qwilfish', '千针鱼'],
        ['212', 'Scizor', '巨钳螳螂'],
        ['213', 'Shuckle', '壶壶'],
        ['214', 'Heracross', '赫拉克罗斯'],
        ['215', 'Sneasel', '狃拉'],
        ['216', 'Teddiursa', '熊宝宝'],
        ['217', 'Ursaring', '圈圈熊'],
        ['218', 'Slugma', '熔岩虫'],
        ['219', 'Magcargo', '熔岩蜗牛'],
        ['220', 'Swinub', '小山猪'],
        ['221', 'Piloswine', '长毛猪'],
        ['222', 'Corsola', '太阳珊瑚'],
        ['223', 'Remoraid', '铁炮鱼'],
        ['224', 'Octillery', '章鱼桶'],
        ['225', 'Delibird', '信使鸟'],
        ['226', 'Mantine', '巨翅飞鱼'],
        ['227', 'Skarmory', '盔甲鸟'],
        ['228', 'Houndour', '戴鲁比'],
        ['229', 'Houndoom', '黑鲁加'],
        ['230', 'Kingdra', '刺龙王'],
        ['231', 'Phanpy', '小小象'],
        ['232', 'Donphan', '顿甲'],
        ['233', 'Porygon2', '多边兽Ⅱ'],
        ['234', 'Stantler', '惊角鹿'],
        ['235', 'Smeargle', '图图犬'],
        ['236', 'Tyrogue', '无畏小子'],
        ['237', 'Hitmontop', '战舞郎'],
        ['238', 'Smoochum', '迷唇娃'],
        ['239', 'Elekid', '电击怪'],
        ['240', 'Magby', '鸭嘴宝宝'],
        ['241', 'Miltank', '大奶罐'],
        ['242', 'Blissey', '幸福蛋'],
        ['243', 'Raikou', '雷公'],
        ['244', 'Entei', '炎帝'],
        ['245', 'Suicune', '水君'],
        ['246', 'Larvitar', '幼基拉斯'],
        ['247', 'Pupitar', '沙基拉斯'],
        ['248', 'Tyranitar', '班基拉斯'],
        ['249', 'Lugia', '洛奇亚'],
        ['250', 'Ho-Oh', '凤王'],
        ['251', 'Celebi', '时拉比'],
        ['252', 'Treecko', '木守宫'],
        ['253', 'Grovyle', '森林蜥蜴'],
        ['254', 'Sceptile', '蜥蜴王'],
        ['255', 'Torchic', '火稚鸡'],
        ['256', 'Combusken', '力壮鸡'],
        ['257', 'Blaziken', '火焰鸡'],
        ['258', 'Mudkip', '水跃鱼'],
        ['259', 'Marshtomp', '沼跃鱼'],
        ['260', 'Swampert', '巨沼怪'],
        ['261', 'Poochyena', '土狼犬'],
        ['262', 'Mightyena', '大狼犬'],
        ['263', 'Zigzagoon', '蛇纹熊'],
        ['264', 'Linoone', '直冲熊'],
        ['265', 'Wurmple', '刺尾虫'],
        ['266', 'Silcoon', '甲壳茧'],
        ['267', 'Beautifly', '狩猎凤蝶'],
        ['268', 'Cascoon', '盾甲茧'],
        ['269', 'Dustox', '毒粉蛾'],
        ['270', 'Lotad', '莲叶童子'],
        ['271', 'Lombre', '莲帽小童'],
        ['272', 'Ludicolo', '乐天河童'],
        ['273', 'Seedot', '橡实果'],
        ['274', 'Nuzleaf', '长鼻叶'],
        ['275', 'Shiftry', '狡猾天狗'],
        ['276', 'Taillow', '傲骨燕'],
        ['277', 'Swellow', '大王燕'],
        ['278', 'Wingull', '长翅鸥'],
        ['279', 'Pelipper', '大嘴鸥'],
        ['280', 'Ralts', '拉鲁拉丝'],
        ['281', 'Kirlia', '奇鲁莉安'],
        ['282', 'Gardevoir', '沙奈朵'],
        ['283', 'Surskit', '溜溜糖球'],
        ['284', 'Masquerain', '雨翅蛾'],
        ['285', 'Shroomish', '蘑蘑菇'],
        ['286', 'Breloom', '斗笠菇'],
        ['287', 'Slakoth', '懒人獭'],
        ['288', 'Vigoroth', '过动猿'],
        ['289', 'Slaking', '请假王'],
        ['290', 'Nincada', '土居忍士'],
        ['291', 'Ninjask', '铁面忍者'],
        ['292', 'Shedinja', '脱壳忍者'],
        ['293', 'Whismur', '咕妞妞'],
        ['294', 'Loudred', '吼爆弹'],
        ['295', 'Exploud', '爆音怪'],
        ['296', 'Makuhita', '幕下力士'],
        ['297', 'Hariyama', '铁掌力士'],
        ['298', 'Azurill', '露力丽'],
        ['299', 'Nosepass', '朝北鼻'],
        ['300', 'Skitty', '向尾喵'],
        ['301', 'Delcatty', '优雅猫'],
        ['302', 'Sableye', '勾魂眼'],
        ['303', 'Mawile', '大嘴娃'],
        ['304', 'Aron', '可可多拉'],
        ['305', 'Lairon', '可多拉'],
        ['306', 'Aggron', '波士可多拉'],
        ['307', 'Meditite', '玛沙那'],
        ['308', 'Medicham', '恰雷姆'],
        ['309', 'Electrike', '落雷兽'],
        ['310', 'Manectric', '雷电兽'],
        ['311', 'Plusle', '正电拍拍'],
        ['312', 'Minun', '负电拍拍'],
        ['313', 'Volbeat', '电萤虫'],
        ['314', 'Illumise', '甜甜萤'],
        ['315', 'Roselia', '毒蔷薇'],
        ['316', 'Gulpin', '溶食兽'],
        ['317', 'Swalot', '吞食兽'],
        ['318', 'Carvanha', '利牙鱼'],
        ['319', 'Sharpedo', '巨牙鲨'],
        ['320', 'Wailmer', '吼吼鲸'],
        ['321', 'Wailord', '吼鲸王'],
        ['322', 'Numel', '呆火驼'],
        ['323', 'Camerupt', '喷火驼'],
        ['324', 'Torkoal', '煤炭龟'],
        ['325', 'Spoink', '跳跳猪'],
        ['326', 'Grumpig', '噗噗猪'],
        ['327', 'Spinda', '晃晃斑'],
        ['328', 'Trapinch', '大颚蚁'],
        ['329', 'Vibrava', '超音波幼虫'],
        ['330', 'Flygon', '沙漠蜻蜓'],
        ['331', 'Cacnea', '刺球仙人掌'],
        ['332', 'Cacturne', '梦歌仙人掌'],
        ['333', 'Swablu', '青绵鸟'],
        ['334', 'Altaria', '七夕青鸟'],
        ['335', 'Zangoose', '猫鼬斩'],
        ['336', 'Seviper', '饭匙蛇'],
        ['337', 'Lunatone', '月石'],
        ['338', 'Solrock', '太阳岩'],
        ['339', 'Barboach', '泥泥鳅'],
        ['340', 'Whiscash', '鲶鱼王'],
        ['341', 'Corphish', '龙虾小兵'],
        ['342', 'Crawdaunt', '铁螯龙虾'],
        ['343', 'Baltoy', '天秤偶'],
        ['344', 'Claydol', '念力土偶'],
        ['345', 'Lileep', '触手百合'],
        ['346', 'Cradily', '摇篮百合'],
        ['347', 'Anorith', '太古羽虫'],
        ['348', 'Armaldo', '太古盔甲'],
        ['349', 'Feebas', '丑丑鱼'],
        ['350', 'Milotic', '美纳斯'],
        ['351', 'Castform', '飘浮泡泡'],
        ['352', 'Kecleon', '变隐龙'],
        ['353', 'Shuppet', '怨影娃娃'],
        ['354', 'Banette', '诅咒娃娃'],
        ['355', 'Duskull', '夜巡灵'],
        ['356', 'Dusclops', '彷徨夜灵'],
        ['357', 'Tropius', '热带龙'],
        ['358', 'Chimecho', '风铃铃'],
        ['359', 'Absol', '阿勃梭鲁'],
        ['360', 'Wynaut', '小果然'],
        ['361', 'Snorunt', '雪童子'],
        ['362', 'Glalie', '冰鬼护'],
        ['363', 'Spheal', '海豹球'],
        ['364', 'Sealeo', '海魔狮'],
        ['365', 'Walrein', '帝牙海狮'],
        ['366', 'Clamperl', '珍珠贝'],
        ['367', 'Huntail', '猎斑鱼'],
        ['368', 'Gorebyss', '樱花鱼'],
        ['369', 'Relicanth', '古空棘鱼'],
        ['370', 'Luvdisc', '爱心鱼'],
        ['371', 'Bagon', '宝贝龙'],
        ['372', 'Shelgon', '甲壳龙'],
        ['373', 'Salamence', '暴飞龙'],
        ['374', 'Beldum', '铁哑铃'],
        ['375', 'Metang', '金属怪'],
        ['376', 'Metagross', '巨金怪'],
        ['377', 'Regirock', '雷吉洛克'],
        ['378', 'Regice', '雷吉艾斯'],
        ['379', 'Registeel', '雷吉斯奇鲁'],
        ['380', 'Latias', '拉帝亚斯'],
        ['381', 'Latios', '拉帝欧斯'],
        ['382', 'Kyogre', '盖欧卡'],
        ['383', 'Groudon', '固拉多'],
        ['384', 'Rayquaza', '烈空坐'],
        ['385', 'Jirachi', '基拉祈'],
        ['386', 'Deoxys', '代欧奇希斯'],
        ['387', 'Turtwig', '草苗龟'],
        ['388', 'Grotle', '树林龟'],
        ['389', 'Torterra', '土台龟'],
        ['390', 'Chimchar', '小火焰猴'],
        ['391', 'Monferno', '猛火猴'],
        ['392', 'Infernape', '烈焰猴'],
        ['393', 'Piplup', '波加曼'],
        ['394', 'Prinplup', '波皇子'],
        ['395', 'Empoleon', '帝王拿波'],
        ['396', 'Starly', '姆克儿'],
        ['397', 'Staravia', '姆克鸟'],
        ['398', 'Staraptor', '姆克鹰'],
        ['399', 'Bidoof', '大牙狸'],
        ['400', 'Bibarel', '大尾狸'],
        ['401', 'Kricketot', '圆法师'],
        ['402', 'Kricketune', '音箱蟀'],
        ['403', 'Shinx', '小猫怪'],
        ['404', 'Luxio', '勒克猫'],
        ['405', 'Luxray', '伦琴猫'],
        ['406', 'Budew', '含羞苞'],
        ['407', 'Roserade', '罗丝雷朵'],
        ['408', 'Cranidos', '头盖龙'],
        ['409', 'Rampardos', '战槌龙'],
        ['410', 'Shieldon', '盾甲龙'],
        ['411', 'Bastiodon', '护城龙'],
        ['412', 'Burmy', '结草儿'],
        ['413', 'Wormadam', '结草贵妇'],
        ['414', 'Mothim', '绅士蛾'],
        ['415', 'Combee', '三蜜蜂'],
        ['416', 'Vespiquen', '蜂女王'],
        ['417', 'Pachirisu', '帕奇利兹'],
        ['418', 'Buizel', '泳圈鼬'],
        ['419', 'Floatzel', '浮潜鼬'],
        ['420', 'Cherubi', '樱花宝'],
        ['421', 'Cherrim', '樱花儿'],
        ['422', 'Shellos', '无壳海兔'],
        ['423', 'Gastrodon', '海兔兽'],
        ['424', 'Ambipom', '双尾怪手'],
        ['425', 'Drifloon', '飘飘球'],
        ['426', 'Drifblim', '随风球'],
        ['427', 'Buneary', '卷卷耳'],
        ['428', 'Lopunny', '长耳兔'],
        ['429', 'Mismagius', '梦妖魔'],
        ['430', 'Honchkrow', '乌鸦头头'],
        ['431', 'Glameow', '魅力喵'],
        ['432', 'Purugly', '东施喵'],
        ['433', 'Chingling', '铃铛响'],
        ['434', 'Stunky', '臭鼬噗'],
        ['435', 'Skuntank', '坦克臭鼬'],
        ['436', 'Bronzor', '铜镜怪'],
        ['437', 'Bronzong', '青铜钟'],
        ['438', 'Bonsly', '盆才怪'],
        ['439', 'Mime Jr.', '魔尼尼'],
        ['440', 'Happiny', '小福蛋'],
        ['441', 'Chatot', '聒噪鸟'],
        ['442', 'Spiritomb', '花岩怪'],
        ['443', 'Gible', '圆陆鲨'],
        ['444', 'Gabite', '尖牙陆鲨'],
        ['445', 'Garchomp', '烈咬陆鲨'],
        ['446', 'Munchlax', '小卡比兽'],
        ['447', 'Riolu', '利欧路'],
        ['448', 'Lucario', '路卡利欧'],
        ['449', 'Hippopotas', '沙河马'],
        ['450', 'Hippowdon', '河马兽'],
        ['451', 'Skorupi', '钳尾蝎'],
        ['452', 'Drapion', '龙王蝎'],
        ['453', 'Croagunk', '不良蛙'],
        ['454', 'Toxicroak', '毒骷蛙'],
        ['455', 'Carnivine', '尖牙笼'],
        ['456', 'Finneon', '荧光鱼'],
        ['457', 'Lumineon', '霓虹鱼'],
        ['458', 'Mantyke', '小球飞鱼'],
        ['459', 'Snover', '雪笠怪'],
        ['460', 'Abomasnow', '暴雪王'],
        ['461', 'Weavile', '玛狃拉'],
        ['462', 'Magnezone', '自爆磁怪'],
        ['463', 'Lickilicky', '大舌舔'],
        ['464', 'Rhyperior', '超甲狂犀'],
        ['465', 'Tangrowth', '巨蔓藤'],
        ['466', 'Electivire', '电击魔兽'],
        ['467', 'Magmortar', '鸭嘴炎兽'],
        ['468', 'Togekiss', '波克基斯'],
        ['469', 'Yanmega', '远古巨蜓'],
        ['470', 'Leafeon', '叶伊布'],
        ['471', 'Glaceon', '冰伊布'],
        ['472', 'Gliscor', '天蝎王'],
        ['473', 'Mamoswine', '象牙猪'],
        ['474', 'Porygon-Z', '多边兽Ｚ'],
        ['475', 'Gallade', '艾路雷朵'],
        ['476', 'Probopass', '大朝北鼻'],
        ['477', 'Dusknoir', '黑夜魔灵'],
        ['478', 'Froslass', '雪妖女'],
        ['479', 'Rotom', '洛托姆'],
        ['480', 'Uxie', '由克希'],
        ['481', 'Mesprit', '艾姆利多'],
        ['482', 'Azelf', '亚克诺姆'],
        ['483', 'Dialga', '帝牙卢卡'],
        ['484', 'Palkia', '帕路奇亚'],
        ['485', 'Heatran', '席多蓝恩'],
        ['486', 'Regigigas', '雷吉奇卡斯'],
        ['487', 'Giratina', '骑拉帝纳'],
        ['488', 'Cresselia', '克雷色利亚'],
        ['489', 'Phione', '霏欧纳'],
        ['490', 'Manaphy', '玛纳霏'],
        ['491', 'Darkrai', '达克莱伊'],
        ['492', 'Shaymin', '谢米'],
        ['493', 'Arceus', '阿尔宙斯'],
        ['494', 'Victini', '比克提尼'],
        ['495', 'Snivy', '藤藤蛇'],
        ['496', 'Servine', '青藤蛇'],
        ['497', 'Serperior', '君主蛇'],
        ['498', 'Tepig', '暖暖猪'],
        ['499', 'Pignite', '炒炒猪'],
        ['500', 'Emboar', '炎武王'],
        ['501', 'Oshawott', '水水獭'],
        ['502', 'Dewott', '双刃丸'],
        ['503', 'Samurott', '大剑鬼'],
        ['504', 'Patrat', '探探鼠'],
        ['505', 'Watchog', '步哨鼠'],
        ['506', 'Lillipup', '小约克'],
        ['507', 'Herdier', '哈约克'],
        ['508', 'Stoutland', '长毛狗'],
        ['509', 'Purrloin', '扒手猫'],
        ['510', 'Liepard', '酷豹'],
        ['511', 'Pansage', '花椰猴'],
        ['512', 'Simisage', '花椰猿'],
        ['513', 'Pansear', '爆香猴'],
        ['514', 'Simisear', '爆香猿'],
        ['515', 'Panpour', '冷水猴'],
        ['516', 'Simipour', '冷水猿'],
        ['517', 'Munna', '食梦梦'],
        ['518', 'Musharna', '梦梦蚀'],
        ['519', 'Pidove', '豆豆鸽'],
        ['520', 'Tranquill', '咕咕鸽'],
        ['521', 'Unfezant', '高傲雉鸡'],
        ['522', 'Blitzle', '斑斑马'],
        ['523', 'Zebstrika', '雷电斑马'],
        ['524', 'Roggenrola', '石丸子'],
        ['525', 'Boldore', '地幔岩'],
        ['526', 'Gigalith', '庞岩怪'],
        ['527', 'Woobat', '滚滚蝙蝠'],
        ['528', 'Swoobat', '心蝙蝠'],
        ['529', 'Drilbur', '螺钉地鼠'],
        ['530', 'Excadrill', '龙头地鼠'],
        ['531', 'Audino', '差不多娃娃'],
        ['532', 'Timburr', '搬运小匠'],
        ['533', 'Gurdurr', '铁骨土人'],
        ['534', 'Conkeldurr', '修建老匠'],
        ['535', 'Tympole', '圆蝌蚪'],
        ['536', 'Palpitoad', '蓝蟾蜍'],
        ['537', 'Seismitoad', '蟾蜍王'],
        ['538', 'Throh', '投摔鬼'],
        ['539', 'Sawk', '打击鬼'],
        ['540', 'Sewaddle', '虫宝包'],
        ['541', 'Swadloon', '宝包茧'],
        ['542', 'Leavanny', '保姆虫'],
        ['543', 'Venipede', '百足蜈蚣'],
        ['544', 'Whirlipede', '车轮球'],
        ['545', 'Scolipede', '蜈蚣王'],
        ['546', 'Cottonee', '木棉球'],
        ['547', 'Whimsicott', '风妖精'],
        ['548', 'Petilil', '百合根娃娃'],
        ['549', 'Lilligant', '裙儿小姐'],
        ['550', 'Basculin', '野蛮鲈鱼'],
        ['551', 'Sandile', '黑眼鳄'],
        ['552', 'Krokorok', '混混鳄'],
        ['553', 'Krookodile', '流氓鳄'],
        ['554', 'Darumaka', '火红不倒翁'],
        ['555', 'Darmanitan', '达摩狒狒'],
        ['556', 'Maractus', '沙铃仙人掌'],
        ['557', 'Dwebble', '石居蟹'],
        ['558', 'Crustle', '岩殿居蟹'],
        ['559', 'Scraggy', '滑滑小子'],
        ['560', 'Scrafty', '头巾混混'],
        ['561', 'Sigilyph', '象征鸟'],
        ['562', 'Yamask', '哭哭面具'],
        ['563', 'Cofagrigus', '死神棺'],
        ['564', 'Tirtouga', '原盖海龟'],
        ['565', 'Carracosta', '肋骨海龟'],
        ['566', 'Archen', '始祖小鸟'],
        ['567', 'Archeops', '始祖大鸟'],
        ['568', 'Trubbish', '破破袋'],
        ['569', 'Garbodor', '灰尘山'],
        ['570', 'Zorua', '索罗亚'],
        ['571', 'Zoroark', '索罗亚克'],
        ['572', 'Minccino', '泡沫栗鼠'],
        ['573', 'Cinccino', '奇诺栗鼠'],
        ['574', 'Gothita', '哥德宝宝'],
        ['575', 'Gothorita', '哥德小童'],
        ['576', 'Gothitelle', '哥德小姐'],
        ['577', 'Solosis', '单卵细胞球'],
        ['578', 'Duosion', '双卵细胞球'],
        ['579', 'Reuniclus', '人造细胞卵'],
        ['580', 'Ducklett', '鸭宝宝'],
        ['581', 'Swanna', '舞天鹅'],
        ['582', 'Vanillite', '迷你冰'],
        ['583', 'Vanillish', '多多冰'],
        ['584', 'Vanilluxe', '双倍多多冰'],
        ['585', 'Deerling', '四季鹿'],
        ['586', 'Sawsbuck', '萌芽鹿'],
        ['587', 'Emolga', '电飞鼠'],
        ['588', 'Karrablast', '盖盖虫'],
        ['589', 'Escavalier', '骑士蜗牛'],
        ['590', 'Foongus', '哎呀球菇'],
        ['591', 'Amoonguss', '败露球菇'],
        ['592', 'Frillish', '轻飘飘'],
        ['593', 'Jellicent', '胖嘟嘟'],
        ['594', 'Alomomola', '保姆曼波'],
        ['595', 'Joltik', '电电虫'],
        ['596', 'Galvantula', '电蜘蛛'],
        ['597', 'Ferroseed', '种子铁球'],
        ['598', 'Ferrothorn', '坚果哑铃'],
        ['599', 'Klink', '齿轮儿'],
        ['600', 'Klang', '齿轮组'],
        ['601', 'Klinklang', '齿轮怪'],
        ['602', 'Tynamo', '麻麻小鱼'],
        ['603', 'Eelektrik', '麻麻鳗'],
        ['604', 'Eelektross', '麻麻鳗鱼王'],
        ['605', 'Elgyem', '小灰怪'],
        ['606', 'Beheeyem', '大宇怪'],
        ['607', 'Litwick', '烛光灵'],
        ['608', 'Lampent', '灯火幽灵'],
        ['609', 'Chandelure', '水晶灯火灵'],
        ['610', 'Axew', '牙牙'],
        ['611', 'Fraxure', '斧牙龙'],
        ['612', 'Haxorus', '双斧战龙'],
        ['613', 'Cubchoo', '喷嚏熊'],
        ['614', 'Beartic', '冻原熊'],
        ['615', 'Cryogonal', '几何雪花'],
        ['616', 'Shelmet', '小嘴蜗'],
        ['617', 'Accelgor', '敏捷虫'],
        ['618', 'Stunfisk', '泥巴鱼'],
        ['619', 'Mienfoo', '功夫鼬'],
        ['620', 'Mienshao', '师父鼬'],
        ['621', 'Druddigon', '赤面龙'],
        ['622', 'Golett', '泥偶小人'],
        ['623', 'Golurk', '泥偶巨人'],
        ['624', 'Pawniard', '驹刀小兵'],
        ['625', 'Bisharp', '劈斩司令'],
        ['626', 'Bouffalant', '爆炸头水牛'],
        ['627', 'Rufflet', '毛头小鹰'],
        ['628', 'Braviary', '勇士雄鹰'],
        ['629', 'Vullaby', '秃鹰丫头'],
        ['630', 'Mandibuzz', '秃鹰娜'],
        ['631', 'Heatmor', '熔蚁兽'],
        ['632', 'Durant', '铁蚁'],
        ['633', 'Deino', '单首龙'],
        ['634', 'Zweilous', '双首暴龙'],
        ['635', 'Hydreigon', '三首恶龙'],
        ['636', 'Larvesta', '燃烧虫'],
        ['637', 'Volcarona', '火神蛾'],
        ['638', 'Cobalion', '勾帕路翁'],
        ['639', 'Terrakion', '代拉基翁'],
        ['640', 'Virizion', '毕力吉翁'],
        ['641', 'Tornadus', '龙卷云'],
        ['642', 'Thundurus', '雷电云'],
        ['643', 'Reshiram', '莱希拉姆'],
        ['644', 'Zekrom', '捷克罗姆'],
        ['645', 'Landorus', '土地云'],
        ['646', 'Kyurem', '酋雷姆'],
        ['647', 'Keldeo', '凯路迪欧'],
        ['648', 'Meloetta', '美洛耶塔'],
        ['649', 'Genesect', '盖诺赛克特'],
        ['650', 'Chespin', '哈力栗'],
        ['651', 'Quilladin', '胖胖哈力'],
        ['652', 'Chesnaught', '布里卡隆'],
        ['653', 'Fennekin', '火狐狸'],
        ['654', 'Braixen', '长尾火狐'],
        ['655', 'Delphox', '妖火红狐'],
        ['656', 'Froakie', '呱呱泡蛙'],
        ['657', 'Frogadier', '呱头蛙'],
        ['658', 'Greninja', '甲贺忍蛙'],
        ['659', 'Bunnelby', '掘掘兔'],
        ['660', 'Diggersby', '掘地兔'],
        ['661', 'Fletchling', '小箭雀'],
        ['662', 'Fletchinder', '火箭雀'],
        ['663', 'Talonflame', '烈箭鹰'],
        ['664', 'Scatterbug', '粉蝶虫'],
        ['665', 'Spewpa', '粉蝶蛹'],
        ['666', 'Vivillon', '彩粉蝶'],
        ['667', 'Litleo', '小狮狮'],
        ['668', 'Pyroar', '火炎狮'],
        ['669', 'Flabebe', '花蓓蓓'],
        ['670', 'Floette', '花叶蒂'],
        ['671', 'Florges', '花洁夫人'],
        ['672', 'Skiddo', '坐骑小羊'],
        ['673', 'Gogoat', '坐骑山羊'],
        ['674', 'Pancham', '顽皮熊猫'],
        ['675', 'Pangoro', '流氓熊猫'],
        ['676', 'Furfrou', '多丽米亚'],
        ['677', 'Espurr', '妙喵'],
        ['678', 'Meowstic', '超能妙喵'],
        ['679', 'Honedge', '独剑鞘'],
        ['680', 'Doublade', '双剑鞘'],
        ['681', 'Aegislash', '坚盾剑怪'],
        ['682', 'Spritzee', '粉香香'],
        ['683', 'Aromatisse', '芳香精'],
        ['684', 'Swirlix', '绵绵泡芙'],
        ['685', 'Slurpuff', '胖甜妮'],
        ['686', 'Inkay', '好啦鱿'],
        ['687', 'Malamar', '乌贼王'],
        ['688', 'Binacle', '龟脚脚'],
        ['689', 'Barbaracle', '龟足巨铠'],
        ['690', 'Skrelp', '垃垃藻'],
        ['691', 'Dragalge', '毒藻龙'],
        ['692', 'Clauncher', '铁臂枪虾'],
        ['693', 'Clawitzer', '钢炮臂虾'],
        ['694', 'Helioptile', '伞电蜥'],
        ['695', 'Heliolisk', '光电伞蜥'],
        ['696', 'Tyrunt', '宝宝暴龙'],
        ['697', 'Tyrantrum', '怪颚龙'],
        ['698', 'Amaura', '冰雪龙'],
        ['699', 'Aurorus', '冰雪巨龙'],
        ['700', 'Sylveon', '仙子伊布'],
        ['701', 'Hawlucha', '摔角鹰人'],
        ['702', 'Dedenne', '咚咚鼠'],
        ['703', 'Carbink', '小碎钻'],
        ['704', 'Goomy', '黏黏宝'],
        ['705', 'Sliggoo', '黏美儿'],
        ['706', 'Goodra', '黏美龙'],
        ['707', 'Klefki', '钥圈儿'],
        ['708', 'Phantump', '小木灵'],
        ['709', 'Trevenant', '朽木妖'],
        ['710', 'Pumpkaboo', '南瓜精'],
        ['711', 'Gourgeist', '南瓜怪人'],
        ['712', 'Bergmite', '冰宝'],
        ['713', 'Avalugg', '冰岩怪'],
        ['714', 'Noibat', '嗡蝠'],
        ['715', 'Noivern', '音波龙'],
        ['716', 'Xerneas', '哲尔尼亚斯'],
        ['717', 'Yveltal', '伊裴尔塔尔'],
        ['718', 'Zygarde', '基格尔德'],
        ['719', 'Diancie', '蒂安希'],
        ['720', 'Hoopa', '胡帕'],
        ['721', 'Volcanion', '波尔凯尼恩'],
        ['722', 'Rowlet', '木木枭'],
        ['723', 'Dartrix', '投羽枭'],
        ['724', 'Decidueye', '狙射树枭'],
        ['725', 'Litten', '火斑喵'],
        ['726', 'Torracat', '炎热喵'],
        ['727', 'Incineroar', '炽焰咆哮虎'],
        ['728', 'Popplio', '球球海狮'],
        ['729', 'Brionne', '花漾海狮'],
        ['730', 'Primarina', '西狮海壬'],
        ['731', 'Pikipek', '小笃儿'],
        ['732', 'Trumbeak', '喇叭啄鸟'],
        ['733', 'Toucannon', '铳嘴大鸟'],
        ['734', 'Yungoos', '猫鼬少'],
        ['735', 'Gumshoos', '猫鼬探长'],
        ['736', 'Grubbin', '强颚鸡母虫'],
        ['737', 'Charjabug', '虫电宝'],
        ['738', 'Vikavolt', '锹农炮虫'],
        ['739', 'Crabrawler', '好胜蟹'],
        ['740', 'Crabominable', '好胜毛蟹'],
        ['741', 'Oricorio', '花舞鸟'],
        ['742', 'Cutiefly', '萌虻'],
        ['743', 'Ribombee', '蝶结萌虻'],
        ['744', 'Rockruff', '岩狗狗'],
        ['745', 'Lycanroc', '鬃岩狼人'],
        ['746', 'Wishiwashi', '弱丁鱼'],
        ['747', 'Mareanie', '好坏星'],
        ['748', 'Toxapex', '超坏星'],
        ['749', 'Mudbray', '泥驴仔'],
        ['750', 'Mudsdale', '重泥挽马'],
        ['751', 'Dewpider', '滴蛛'],
        ['752', 'Araquanid', '滴蛛霸'],
        ['753', 'Fomantis', '伪螳草'],
        ['754', 'Lurantis', '兰螳花'],
        ['755', 'Morelull', '睡睡菇'],
        ['756', 'Shiinotic', '灯罩夜菇'],
        ['757', 'Salandit', '夜盗火蜥'],
        ['758', 'Salazzle', '焰后蜥'],
        ['759', 'Stufful', '童偶熊'],
        ['760', 'Bewear', '穿着熊'],
        ['761', 'Bounsweet', '甜竹竹'],
        ['762', 'Steenee', '甜舞妮'],
        ['763', 'Tsareena', '甜冷美后'],
        ['764', 'Comfey', '花疗环环'],
        ['765', 'Oranguru', '智挥猩'],
        ['766', 'Passimian', '投掷猴'],
        ['767', 'Wimpod', '胆小虫'],
        ['768', 'Golisopod', '具甲武者'],
        ['769', 'Sandygast', '沙丘娃'],
        ['770', 'Palossand', '噬沙堡爷'],
        ['771', 'Pyukumuku', '拳海参'],
        ['772', 'Type: Null', '属性：空'],
        ['773', 'Silvally', '银伴战兽'],
        ['774', 'Minior', '小陨星'],
        ['775', 'Komala', '树枕尾熊'],
        ['776', 'Turtonator', '爆焰龟兽'],
        ['777', 'Togedemaru', '托戈德玛尔'],
        ['778', 'Mimikyu', '谜拟Ｑ'],
        ['779', 'Bruxish', '磨牙彩皮鱼'],
        ['780', 'Drampa', '老翁龙'],
        ['781', 'Dhelmise', '破破舵轮'],
        ['782', 'Jangmo-o', '心鳞宝'],
        ['783', 'Hakamo-o', '鳞甲龙'],
        ['784', 'Kommo-o', '杖尾鳞甲龙'],
        ['785', 'Tapu Koko', '卡璞・鸣鸣'],
        ['786', 'Tapu Lele', '卡璞・蝶蝶'],
        ['787', 'Tapu Bulu', '卡璞・哞哞'],
        ['788', 'Tapu Fini', '卡璞・鳍鳍'],
        ['789', 'Cosmog', '科斯莫古'],
        ['790', 'Cosmoem', '科斯莫姆'],
        ['791', 'Solgaleo', '索尔迦雷欧'],
        ['792', 'Lunala', '露奈雅拉'],
        ['793', 'Nihilego', '虚吾伊德'],
        ['794', 'Buzzwole', '爆肌蚊'],
        ['795', 'Pheromosa', '费洛美螂'],
        ['796', 'Xurkitree', '电束木'],
        ['797', 'Celesteela', '铁火辉夜'],
        ['798', 'Kartana', '纸御剑'],
        ['799', 'Guzzlord', '恶食大王'],
        ['800', 'Necrozma', '奈克洛兹玛'],
        ['801', 'Magearna', '玛机雅娜'],
        ['802', 'Marshadow', '玛夏多'],
        ['803', 'Poipole', '毒贝比'],
        ['804', 'Naganadel', '四颚针龙'],
        ['805', 'Stakataka', '垒磊石'],
        ['806', 'Blacephalon', '砰头小丑'],
        ['807', 'Zeraora', '捷拉奥拉'],
        ['808', 'Meltan', '美录坦'],
        ['809', 'Melmetal', '美录梅塔']
      ]
    }
  }
}
</script>

<style>
</style>
