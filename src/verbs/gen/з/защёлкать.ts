import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защёлкать: PerfectVerb = {
  name: Word('защёлкать', 1),
  singular1stPerson: Word('защёлкаю', 1),
  singular2ndPerson: Word('защёлкаешь', 1),
  singular3rdPerson: Word('защёлкает', 1),
  plural1stPerson: Word('защёлкаем', 1),
  plural2ndPerson: Word('защёлкаете', 1),
  plural3rdPerson: Word('защёлкают', 1),
  masculinePast: Word('защёлкал', 1),
  femininePast: Word('защёлкала', 1),
  neuterPast: Word('защёлкало', 1),
  pluralPast: Word('защёлкали', 1),
  imperativeInformal: Word('защёлкай', 1),
  imperativeFormal: Word('защёлкайте', 1),
  imperfect: [],
};

perfectVerbs.set(защёлкать.name.text, защёлкать);

export { защёлкать };