/**
 * 韭菜
 * 查询模型
 * {
		fieldName:'library_number',     //字段名，对应数据库中的字段名
		chineseName:'库编号',           //中文名，该字段的中文名
		type:'text',                    //查询类型，有三个类型：text,select,compare
		attach:[]                       //附件条件。当查询类型为text时，此字段无意义；当为select时，此字段为选项数组；当为compare时，此字段为输入区间的最小值、最大值
	}
 */
module.exports = [
	{
		fieldName:'germplasm_bank_number',
		chineseName:'种质库编号',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'uniform_number',
		chineseName:'统一编号',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'cultivar_name',
		chineseName:'品种名称',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'translation',
		chineseName:'译名',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'seed_source',
		chineseName:'种子来源',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'preservation_unit',
		chineseName:'保存单位',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'save_number',
		chineseName:'保存编号',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'growth_stage',
		chineseName:'生育期',
		type:'compare',
		sel:'=',
		val:'',
		attach:[20,365]
	},
	{
		fieldName:'plant_height',
		chineseName:'株高',
		type:'compare',
		sel:'=',
		val:'',
		attach:[22,55]
	},
	{
		fieldName:'tillering',
		chineseName:'分蘖性',
		type:'select',
		val:'请选择。。。',
		attach:['很强','较强','较弱','强','弱','中']
	},
	{
		fieldName:'leaves_state',
		chineseName:'叶态',
		type:'select',
		val:'请选择。。。',
		attach:['平展','直立','中']
	},
	{
		fieldName:'leaf',
		chineseName:'叶形',
		type:'select',
		val:'请选择。。。',
		attach:['扁条','长条','短条','剑形','宽条','条形','窄条']
	},
	{
		fieldName:'leaf_color',
		chineseName:'叶色',
		type:'select',
		val:'请选择。。。',
		attach:['绿','浅绿','深绿']
	},
	{
		fieldName:'leaf_width',
		chineseName:'叶宽',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'yelafen',
		chineseName:'叶蜡粉',
		type:'select',
		val:'请选择。。。',
		attach:['多','较多','少','无','中']
	},
	{
		fieldName:'sheath_color',
		chineseName:'叶鞘颜色',
		type:'select',
		val:'请选择。。。',
		attach:['白','绿','浅红','浅黄','浅绿','浅紫','紫红']
	},
	{
		fieldName:'color',
		chineseName:'花色',
		type:'select',
		val:'请选择。。。',
		attach:['白色','浅黄','浅绿','紫红']
	},
	{
		fieldName:'individual_weight',
		chineseName:'单株重',
		type:'compare',
		sel:'=',
		val:'',
		attach:[1.9,110]
	},
	{
		fieldName:'spicy',
		chineseName:'辣味',
		type:'select',
		val:'请选择。。。',
		attach:['强','弱','中']
	},
	{
		fieldName:'aroma',
		chineseName:'香气',
		type:'select',
		val:'请选择。。。',
		attach:['淡','较淡','较浓','浓','中']
	},
	{
		fieldName:'purpose',
		chineseName:'用途',
		type:'select',
		val:'请选择。。。',
		attach:['生食','鲜熟食','腌渍']
	},
	{
		fieldName:'cultivation_season',
		chineseName:'栽培季节',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'stress_resistance',
		chineseName:'抗逆性',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'disease_resistance_and_insect_resistance',
		chineseName:'抗病虫性',
		type:'text',
		val:'',
		attach:[]
	},
	{
		fieldName:'per_mu_yield',
		chineseName:'亩产',
		type:'compare',
		sel:'=',
		val:'',
		attach:[224,5000]
	},
	{
		fieldName:'remarks',
		chineseName:'备注',
		type:'text',
		val:'',
		attach:[]
	},
]