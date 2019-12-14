import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завизировать: PerfectVerb = {
  name: Word('завизировать', 5),
  singular1stPerson: Word('завизирую', 5),
  singular2ndPerson: Word('завизируешь', 5),
  singular3rdPerson: Word('завизирует', 5),
  plural1stPerson: Word('завизируем', 5),
  plural2ndPerson: Word('завизируете', 5),
  plural3rdPerson: Word('завизируют', 5),
  masculinePast: Word('завизировал', 5),
  femininePast: Word('завизировала', 5),
  neuterPast: Word('завизировало', 5),
  pluralPast: Word('завизировали', 5),
  imperativeInformal: Word('завизируй', 5),
  imperativeFormal: Word('завизируйте', 5),
  imperfect: [],
};

perfectVerbs.set(завизировать.name.text, завизировать);

export { завизировать };