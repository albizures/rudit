import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облетать: PerfectVerb = {
  name: Word('облетать', 5),
  singular1stPerson: Word('облетаю', 5),
  singular2ndPerson: Word('облетаешь', 5),
  singular3rdPerson: Word('облетает', 5),
  plural1stPerson: Word('облетаем', 5),
  plural2ndPerson: Word('облетаете', 5),
  plural3rdPerson: Word('облетают', 5),
  masculinePast: Word('облетал', 5),
  femininePast: Word('облетала', 5),
  neuterPast: Word('облетало', 5),
  pluralPast: Word('облетали', 5),
  imperativeInformal: Word('облетай', 5),
  imperativeFormal: Word('облетайте', 5),
  imperfect: [],
};

perfectVerbs.set(облетать.name.text, облетать);

export { облетать };