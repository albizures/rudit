import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тявкать: PerfectVerb = {
  name: Word('тявкать', 1),
  singular1stPerson: Word('тявкаю', 1),
  singular2ndPerson: Word('тявкаешь', 1),
  singular3rdPerson: Word('тявкает', 1),
  plural1stPerson: Word('тявкаем', 1),
  plural2ndPerson: Word('тявкаете', 1),
  plural3rdPerson: Word('тявкают', 1),
  masculinePast: Word('тявкал', 1),
  femininePast: Word('тявкала', 1),
  neuterPast: Word('тявкало', 1),
  pluralPast: Word('тявкали', 1),
  imperativeInformal: Word('тявкай', 1),
  imperativeFormal: Word('тявкайте', 1),
  imperfect: [],
};

perfectVerbs.set(тявкать.name.text, тявкать);

export { тявкать };