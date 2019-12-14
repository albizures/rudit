import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощёлкать: PerfectVerb = {
  name: Word('пощёлкать', 6),
  singular1stPerson: Word('пощёлкаю', 6),
  singular2ndPerson: Word('пощёлкаешь', 6),
  singular3rdPerson: Word('пощёлкает', 6),
  plural1stPerson: Word('пощёлкаем', 6),
  plural2ndPerson: Word('пощёлкаете', 6),
  plural3rdPerson: Word('пощёлкают', 6),
  masculinePast: Word('пощёлкал', 6),
  femininePast: Word('пощёлкала', 6),
  neuterPast: Word('пощёлкало', 6),
  pluralPast: Word('пощёлкали', 6),
  imperativeInformal: Word('пощёлкай', 6),
  imperativeFormal: Word('пощёлкайте', 6),
  imperfect: [],
};

perfectVerbs.set(пощёлкать.name.text, пощёлкать);

export { пощёлкать };