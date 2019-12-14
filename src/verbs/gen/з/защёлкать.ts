import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защёлкать: PerfectVerb = {
  name: Word('защёлкать', 3),
  singular1stPerson: Word('защёлкаю', 3),
  singular2ndPerson: Word('защёлкаешь', 3),
  singular3rdPerson: Word('защёлкает', 3),
  plural1stPerson: Word('защёлкаем', 3),
  plural2ndPerson: Word('защёлкаете', 3),
  plural3rdPerson: Word('защёлкают', 3),
  masculinePast: Word('защёлкал', 3),
  femininePast: Word('защёлкала', 3),
  neuterPast: Word('защёлкало', 3),
  pluralPast: Word('защёлкали', 3),
  imperativeInformal: Word('защёлкай', 3),
  imperativeFormal: Word('защёлкайте', 3),
  imperfect: [],
};

perfectVerbs.set(защёлкать.name.text, защёлкать);

export { защёлкать };