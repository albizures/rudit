import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пичкать: PerfectVerb = {
  name: Word('пичкать', 1),
  singular1stPerson: Word('пичкаю', 1),
  singular2ndPerson: Word('пичкаешь', 1),
  singular3rdPerson: Word('пичкает', 1),
  plural1stPerson: Word('пичкаем', 1),
  plural2ndPerson: Word('пичкаете', 1),
  plural3rdPerson: Word('пичкают', 1),
  masculinePast: Word('пичкал', 1),
  femininePast: Word('пичкала', 1),
  neuterPast: Word('пичкало', 1),
  pluralPast: Word('пичкали', 1),
  imperativeInformal: Word('пичкай', 1),
  imperativeFormal: Word('пичкайте', 1),
  imperfect: [],
};

perfectVerbs.set(пичкать.name.text, пичкать);

export { пичкать };