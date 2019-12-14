import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лодырничать: PerfectVerb = {
  name: Word('лодырничать', 1),
  singular1stPerson: Word('лодырничаю', 1),
  singular2ndPerson: Word('лодырничаешь', 1),
  singular3rdPerson: Word('лодырничает', 1),
  plural1stPerson: Word('лодырничаем', 1),
  plural2ndPerson: Word('лодырничаете', 1),
  plural3rdPerson: Word('лодырничают', 1),
  masculinePast: Word('лодырничал', 1),
  femininePast: Word('лодырничала', 1),
  neuterPast: Word('лодырничало', 1),
  pluralPast: Word('лодырничали', 1),
  imperativeInformal: Word('лодырничай', 1),
  imperativeFormal: Word('лодырничайте', 1),
  imperfect: [],
};

perfectVerbs.set(лодырничать.name.text, лодырничать);

export { лодырничать };