import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налетать: PerfectVerb = {
  name: Word('налетать', 5),
  singular1stPerson: Word('налетаю', 5),
  singular2ndPerson: Word('налетаешь', 5),
  singular3rdPerson: Word('налетает', 5),
  plural1stPerson: Word('налетаем', 5),
  plural2ndPerson: Word('налетаете', 5),
  plural3rdPerson: Word('налетают', 5),
  masculinePast: Word('налетал', 5),
  femininePast: Word('налетала', 5),
  neuterPast: Word('налетало', 5),
  pluralPast: Word('налетали', 5),
  imperativeInformal: Word('налетай', 5),
  imperativeFormal: Word('налетайте', 5),
  imperfect: [],
};

perfectVerbs.set(налетать.name.text, налетать);

export { налетать };