import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инкрустировать: PerfectVerb = {
  name: Word('инкрустировать', 7),
  singular1stPerson: Word('инкрустирую', 7),
  singular2ndPerson: Word('инкрустируешь', 7),
  singular3rdPerson: Word('инкрустирует', 7),
  plural1stPerson: Word('инкрустируем', 7),
  plural2ndPerson: Word('инкрустируете', 7),
  plural3rdPerson: Word('инкрустируют', 7),
  masculinePast: Word('инкрустировал', 7),
  femininePast: Word('инкрустировала', 7),
  neuterPast: Word('инкрустировало', 7),
  pluralPast: Word('инкрустировали', 7),
  imperativeInformal: Word('инкрустируй', 7),
  imperativeFormal: Word('инкрустируйте', 7),
  imperfect: [],
};

perfectVerbs.set(инкрустировать.name.text, инкрустировать);

export { инкрустировать };