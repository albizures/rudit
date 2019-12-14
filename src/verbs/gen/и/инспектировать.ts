import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инспектировать: PerfectVerb = {
  name: Word('инспектировать', 7),
  singular1stPerson: Word('инспектирую', 7),
  singular2ndPerson: Word('инспектируешь', 7),
  singular3rdPerson: Word('инспектирует', 7),
  plural1stPerson: Word('инспектируем', 7),
  plural2ndPerson: Word('инспектируете', 7),
  plural3rdPerson: Word('инспектируют', 7),
  masculinePast: Word('инспектировал', 7),
  femininePast: Word('инспектировала', 7),
  neuterPast: Word('инспектировало', 7),
  pluralPast: Word('инспектировали', 7),
  imperativeInformal: Word('инспектируй', 7),
  imperativeFormal: Word('инспектируйте', 7),
  imperfect: [],
};

perfectVerbs.set(инспектировать.name.text, инспектировать);

export { инспектировать };