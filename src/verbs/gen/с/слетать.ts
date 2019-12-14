import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слетать: PerfectVerb = {
  name: Word('слетать', 4),
  singular1stPerson: Word('слетаю', 4),
  singular2ndPerson: Word('слетаешь', 4),
  singular3rdPerson: Word('слетает', 4),
  plural1stPerson: Word('слетаем', 4),
  plural2ndPerson: Word('слетаете', 4),
  plural3rdPerson: Word('слетают', 4),
  masculinePast: Word('слетал', 4),
  femininePast: Word('слетала', 4),
  neuterPast: Word('слетало', 4),
  pluralPast: Word('слетали', 4),
  imperativeInformal: Word('слетай', 4),
  imperativeFormal: Word('слетайте', 4),
  imperfect: [],
};

perfectVerbs.set(слетать.name.text, слетать);

export { слетать };