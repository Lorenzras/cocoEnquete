import format from 'date-fns/format';

export const formInit = {
  fullname: { label: '名前', value: '', pageNum: 0, touch: false, valueError: true, errorText: '必須項目です。ご記入をお願いします。' },
  furigana: { label: 'フリガナ', value: '', pageNum: 0, touch: false, valueError: true, errorText: '必須項目です。ご記入をお願いします。' },
  dateEntered: { label: '記入日', value: format(new Date(), "yyyy-MM-dd'T'HH:mm:00'Z'") },
  birthday: { label: '誕生日', value: '', pageNum: 0, touch: false, valueError: true, errorText: '必須項目です。ご記入をお願いします。' },
  postCode: { label: '郵便番号', value: '', pageNum: 0, touch: false, valueError: true, errorText: '数字で入力してください。入力例:442-0888' },
  address: { label: '住所', value: '', pageNum: 0, touch: false, valueError: true, errorText: '必須項目です。ご記入をお願いします。' },
  address2: { label: '住所(建物名)', value: '', pageNum: 0 },
  tel: { label: 'TEL', value: '', pageNum: 0, touch: false, valueError: true, errorText: '数字で入力してください。入力例:090-1111-2222' },
  mail: { label: 'MAIL', value: '', pageNum: 0, touch: false, valueError: true, errorText: '英数字で入力してください。入力例:sample@mail.jp' },
  workPlace: { label: 'ご勤務先', pageNum: 0, value: '' },
  holiday: { label: 'ご休日', pageNum: 0, value: '' },
  works: { label: 'ご職業', pageNum: 1, value: '' },
  annualIncome: { label: 'ご年収', value: { min: '', max: '' }, pageNum: 1 },
  visitPurpose: { label: 'ご来場の目的', value: [], pageNum: 1 },
  vstPrpsOthers: { label: 'その他詳細', value: '', pageNum: 1 },
  importantPoint: { label: '重要視するもの', value: [], pageNum: 2 },
  impPointOthers: { label: 'その他詳細', value: '', pageNum: 2 },
  currentHome: { label: '現在のお住まい', value: '', pageNum: 3 },
  rentPrice: { label: '賃貸の月額', value: '', pageNum: 3 },
  moveInNum: { label: '入居予定人数', value: '', pageNum: 3 },
  moveInForm: { label: '入居形態', value: '', pageNum: 3 },
  mvInFormOthers: { label: '入居形態詳細', value: '', pageNum: 3 },
  moveInSeason: { label: '入居希望時期', value: '', pageNum: 4 },
  budget: { label: '建物予算', value: { min: '', max: '', pageNum: 4 } },
  ownResources: { label: '自己資金', value: { min: '', max: '' }, pageNum: 4 },
  landExistence: { label: '土地の有無', value: '', pageNum: 4 },
  areaOfLand: { label: '土地の面積', value: '', pageNum: 4 },
  locationOfLand: { label: '土地の所在', value: '', pageNum: 4 },
  siteBrowsing: { label: 'サイトの閲覧', value: '', pageNum: 4 },
  documentRequest: { label: '資料請求', value: '', pageNum: 4 },
  informationSource: { label: '参照情報源', value: [], pageNum: 4 },
  yumePersonInCharge: { label: '担当者', value: '', pageNum: 4 },
  introducer: { label: '紹介者', value: '', pageNum: 4 },
  firstOpportunity: { label: '最初のきっかけ', value: '', pageNum: 5 },
  bestOpportunity: { label: '一番のきっかけ', value: '', pageNum: 5 },
};