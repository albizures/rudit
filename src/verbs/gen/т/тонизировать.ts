import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тонизировать: PerfectVerb = {
  name: Word('тонизировать', 5),
  singular1stPerson: Word('тонизирую', 5),
  singular2ndPerson: Word('тонизируешь', 5),
  singular3rdPerson: Word('тонизирует', 5),
  plural1stPerson: Word('тонизируем', 5),
  plural2ndPerson: Word('тонизируете', 5),
  plural3rdPerson: Word('тонизируют', 5),
  masculinePast: Word('тонизировал', 5),
  femininePast: Word('тонизировала', 5),
  neuterPast: Word('тонизировало', 5),
  pluralPast: Word('тонизировали', 5),
  imperativeInformal: Word('тонизируй', 5),
  imperativeFormal: Word('тонизируйте', 5),
  imperfect: [],
};

perfectVerbs.set(тонизировать.name.text, тонизировать);

export { тонизировать };