import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отщёлкать: PerfectVerb = {
  name: Word('отщёлкать', 3),
  singular1stPerson: Word('отщёлкаю', 3),
  singular2ndPerson: Word('отщёлкаешь', 3),
  singular3rdPerson: Word('отщёлкает', 3),
  plural1stPerson: Word('отщёлкаем', 3),
  plural2ndPerson: Word('отщёлкаете', 3),
  plural3rdPerson: Word('отщёлкают', 3),
  masculinePast: Word('отщёлкал', 3),
  femininePast: Word('отщёлкала', 3),
  neuterPast: Word('отщёлкало', 3),
  pluralPast: Word('отщёлкали', 3),
  imperativeInformal: Word('отщёлкай', 3),
  imperativeFormal: Word('отщёлкайте', 3),
  imperfect: [],
};

perfectVerbs.set(отщёлкать.name.text, отщёлкать);

export { отщёлкать };