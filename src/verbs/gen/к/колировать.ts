import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колировать: PerfectVerb = {
  name: Word('колировать', 7),
  singular1stPerson: Word('колирую', 5),
  singular2ndPerson: Word('колируешь', 5),
  singular3rdPerson: Word('колирует', 5),
  plural1stPerson: Word('колируем', 5),
  plural2ndPerson: Word('колируете', 5),
  plural3rdPerson: Word('колируют', 5),
  masculinePast: Word('колировал', 7),
  femininePast: Word('колировала', 7),
  neuterPast: Word('колировало', 7),
  pluralPast: Word('колировали', 7),
  imperativeInformal: Word('колируй', 5),
  imperativeFormal: Word('колируйте', 5),
  imperfect: [],
};

perfectVerbs.set(колировать.name.text, колировать);

export { колировать };