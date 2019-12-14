import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшатать: PerfectVerb = {
  name: Word('расшатать', 6),
  singular1stPerson: Word('расшатаю', 6),
  singular2ndPerson: Word('расшатаешь', 6),
  singular3rdPerson: Word('расшатает', 6),
  plural1stPerson: Word('расшатаем', 6),
  plural2ndPerson: Word('расшатаете', 6),
  plural3rdPerson: Word('расшатают', 6),
  masculinePast: Word('расшатал', 6),
  femininePast: Word('расшатала', 6),
  neuterPast: Word('расшатало', 6),
  pluralPast: Word('расшатали', 6),
  imperativeInformal: Word('расшатай', 6),
  imperativeFormal: Word('расшатайте', 6),
  imperfect: [],
};

perfectVerbs.set(расшатать.name.text, расшатать);

export { расшатать };