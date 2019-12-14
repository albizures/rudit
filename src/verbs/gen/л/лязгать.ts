import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лязгать: PerfectVerb = {
  name: Word('лязгать', 1),
  singular1stPerson: Word('лязгаю', 1),
  singular2ndPerson: Word('лязгаешь', 1),
  singular3rdPerson: Word('лязгает', 1),
  plural1stPerson: Word('лязгаем', 1),
  plural2ndPerson: Word('лязгаете', 1),
  plural3rdPerson: Word('лязгают', 1),
  masculinePast: Word('лязгал', 1),
  femininePast: Word('лязгала', 1),
  neuterPast: Word('лязгало', 1),
  pluralPast: Word('лязгали', 1),
  imperativeInformal: Word('лязгай', 1),
  imperativeFormal: Word('лязгайте', 1),
  imperfect: [],
};

perfectVerbs.set(лязгать.name.text, лязгать);

export { лязгать };