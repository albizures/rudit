import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощёлкать: PerfectVerb = {
  name: Word('пощёлкать', 3),
  singular1stPerson: Word('пощёлкаю', 3),
  singular2ndPerson: Word('пощёлкаешь', 3),
  singular3rdPerson: Word('пощёлкает', 3),
  plural1stPerson: Word('пощёлкаем', 3),
  plural2ndPerson: Word('пощёлкаете', 3),
  plural3rdPerson: Word('пощёлкают', 3),
  masculinePast: Word('пощёлкал', 3),
  femininePast: Word('пощёлкала', 3),
  neuterPast: Word('пощёлкало', 3),
  pluralPast: Word('пощёлкали', 3),
  imperativeInformal: Word('пощёлкай', 3),
  imperativeFormal: Word('пощёлкайте', 3),
  imperfect: [],
};

perfectVerbs.set(пощёлкать.name.text, пощёлкать);

export { пощёлкать };