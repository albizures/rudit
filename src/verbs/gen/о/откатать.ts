import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откатать: PerfectVerb = {
  name: Word('откатать', 5),
  singular1stPerson: Word('откатаю', 5),
  singular2ndPerson: Word('откатаешь', 5),
  singular3rdPerson: Word('откатает', 5),
  plural1stPerson: Word('откатаем', 5),
  plural2ndPerson: Word('откатаете', 5),
  plural3rdPerson: Word('откатают', 5),
  masculinePast: Word('откатал', 5),
  femininePast: Word('откатала', 5),
  neuterPast: Word('откатало', 5),
  pluralPast: Word('откатали', 5),
  imperativeInformal: Word('откатай', 5),
  imperativeFormal: Word('откатайте', 5),
  imperfect: [],
};

perfectVerbs.set(откатать.name.text, откатать);

export { откатать };