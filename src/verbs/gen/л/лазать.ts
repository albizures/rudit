import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лазать: PerfectVerb = {
  name: Word('лазать', 1),
  singular1stPerson: Word('лазаю', 1),
  singular2ndPerson: Word('лазаешь', 1),
  singular3rdPerson: Word('лазает', 1),
  plural1stPerson: Word('лазаем', 1),
  plural2ndPerson: Word('лазаете', 1),
  plural3rdPerson: Word('лазают', 1),
  masculinePast: Word('лазал', 1),
  femininePast: Word('лазала', 1),
  neuterPast: Word('лазало', 1),
  pluralPast: Word('лазали', 1),
  imperativeInformal: Word('лазай', 1),
  imperativeFormal: Word('лазайте', 1),
  imperfect: [],
};

perfectVerbs.set(лазать.name.text, лазать);

export { лазать };