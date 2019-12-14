import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const авансировать: PerfectVerb = {
  name: Word('авансировать', 5),
  singular1stPerson: Word('авансирую', 5),
  singular2ndPerson: Word('авансируешь', 5),
  singular3rdPerson: Word('авансирует', 5),
  plural1stPerson: Word('авансируем', 5),
  plural2ndPerson: Word('авансируете', 5),
  plural3rdPerson: Word('авансируют', 5),
  masculinePast: Word('авансировал', 5),
  femininePast: Word('авансировала', 5),
  neuterPast: Word('авансировало', 5),
  pluralPast: Word('авансировали', 5),
  imperativeInformal: Word('авансируй', 5),
  imperativeFormal: Word('авансируйте', 5),
  imperfect: [],
};

perfectVerbs.set(авансировать.name.text, авансировать);

export { авансировать };