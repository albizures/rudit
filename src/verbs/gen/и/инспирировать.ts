import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инспирировать: PerfectVerb = {
  name: Word('инспирировать', 6),
  singular1stPerson: Word('инспирирую', 6),
  singular2ndPerson: Word('инспирируешь', 6),
  singular3rdPerson: Word('инспирирует', 6),
  plural1stPerson: Word('инспирируем', 6),
  plural2ndPerson: Word('инспирируете', 6),
  plural3rdPerson: Word('инспирируют', 6),
  masculinePast: Word('инспирировал', 6),
  femininePast: Word('инспирировала', 6),
  neuterPast: Word('инспирировало', 6),
  pluralPast: Word('инспирировали', 6),
  imperativeInformal: Word('инспирируй', 6),
  imperativeFormal: Word('инспирируйте', 6),
  imperfect: [],
};

perfectVerbs.set(инспирировать.name.text, инспирировать);

export { инспирировать };