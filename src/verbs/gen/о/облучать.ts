import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облучать: PerfectVerb = {
  name: Word('облучать', 5),
  singular1stPerson: Word('облучаю', 5),
  singular2ndPerson: Word('облучаешь', 5),
  singular3rdPerson: Word('облучает', 5),
  plural1stPerson: Word('облучаем', 5),
  plural2ndPerson: Word('облучаете', 5),
  plural3rdPerson: Word('облучают', 5),
  masculinePast: Word('облучал', 5),
  femininePast: Word('облучала', 5),
  neuterPast: Word('облучало', 5),
  pluralPast: Word('облучали', 5),
  imperativeInformal: Word('облучай', 5),
  imperativeFormal: Word('облучайте', 5),
  imperfect: [],
};

perfectVerbs.set(облучать.name.text, облучать);

export { облучать };