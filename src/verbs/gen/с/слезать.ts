import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слезать: PerfectVerb = {
  name: Word('слезать', 4),
  singular1stPerson: Word('слезаю', 4),
  singular2ndPerson: Word('слезаешь', 4),
  singular3rdPerson: Word('слезает', 4),
  plural1stPerson: Word('слезаем', 4),
  plural2ndPerson: Word('слезаете', 4),
  plural3rdPerson: Word('слезают', 4),
  masculinePast: Word('слезал', 4),
  femininePast: Word('слезала', 4),
  neuterPast: Word('слезало', 4),
  pluralPast: Word('слезали', 4),
  imperativeInformal: Word('слезай', 4),
  imperativeFormal: Word('слезайте', 4),
  imperfect: [],
};

perfectVerbs.set(слезать.name.text, слезать);

export { слезать };