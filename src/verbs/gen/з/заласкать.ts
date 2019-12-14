import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заласкать: PerfectVerb = {
  name: Word('заласкать', 6),
  singular1stPerson: Word('заласкаю', 6),
  singular2ndPerson: Word('заласкаешь', 6),
  singular3rdPerson: Word('заласкает', 6),
  plural1stPerson: Word('заласкаем', 6),
  plural2ndPerson: Word('заласкаете', 6),
  plural3rdPerson: Word('заласкают', 6),
  masculinePast: Word('заласкал', 6),
  femininePast: Word('заласкала', 6),
  neuterPast: Word('заласкало', 6),
  pluralPast: Word('заласкали', 6),
  imperativeInformal: Word('заласкай', 6),
  imperativeFormal: Word('заласкайте', 6),
  imperfect: [],
};

perfectVerbs.set(заласкать.name.text, заласкать);

export { заласкать };