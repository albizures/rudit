import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лузгать: PerfectVerb = {
  name: Word('лузгать', 1),
  singular1stPerson: Word('лузгаю', 1),
  singular2ndPerson: Word('лузгаешь', 1),
  singular3rdPerson: Word('лузгает', 1),
  plural1stPerson: Word('лузгаем', 1),
  plural2ndPerson: Word('лузгаете', 1),
  plural3rdPerson: Word('лузгают', 1),
  masculinePast: Word('лузгал', 1),
  femininePast: Word('лузгала', 1),
  neuterPast: Word('лузгало', 1),
  pluralPast: Word('лузгали', 1),
  imperativeInformal: Word('лузгай', 1),
  imperativeFormal: Word('лузгайте', 1),
  imperfect: [],
};

perfectVerbs.set(лузгать.name.text, лузгать);

export { лузгать };