import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отщёлкать: PerfectVerb = {
  name: Word('отщёлкать', 6),
  singular1stPerson: Word('отщёлкаю', 6),
  singular2ndPerson: Word('отщёлкаешь', 6),
  singular3rdPerson: Word('отщёлкает', 6),
  plural1stPerson: Word('отщёлкаем', 6),
  plural2ndPerson: Word('отщёлкаете', 6),
  plural3rdPerson: Word('отщёлкают', 6),
  masculinePast: Word('отщёлкал', 6),
  femininePast: Word('отщёлкала', 6),
  neuterPast: Word('отщёлкало', 6),
  pluralPast: Word('отщёлкали', 6),
  imperativeInformal: Word('отщёлкай', 6),
  imperativeFormal: Word('отщёлкайте', 6),
  imperfect: [],
};

perfectVerbs.set(отщёлкать.name.text, отщёлкать);

export { отщёлкать };