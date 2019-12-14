import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплетать: PerfectVerb = {
  name: Word('расплетать', 7),
  singular1stPerson: Word('расплетаю', 7),
  singular2ndPerson: Word('расплетаешь', 7),
  singular3rdPerson: Word('расплетает', 7),
  plural1stPerson: Word('расплетаем', 7),
  plural2ndPerson: Word('расплетаете', 7),
  plural3rdPerson: Word('расплетают', 7),
  masculinePast: Word('расплетал', 7),
  femininePast: Word('расплетала', 7),
  neuterPast: Word('расплетало', 7),
  pluralPast: Word('расплетали', 7),
  imperativeInformal: Word('расплетай', 7),
  imperativeFormal: Word('расплетайте', 7),
  imperfect: [],
};

perfectVerbs.set(расплетать.name.text, расплетать);

export { расплетать };