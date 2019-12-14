import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощёлкивать: PerfectVerb = {
  name: Word('пощёлкивать', 3),
  singular1stPerson: Word('пощёлкиваю', 3),
  singular2ndPerson: Word('пощёлкиваешь', 3),
  singular3rdPerson: Word('пощёлкивает', 3),
  plural1stPerson: Word('пощёлкиваем', 3),
  plural2ndPerson: Word('пощёлкиваете', 3),
  plural3rdPerson: Word('пощёлкивают', 3),
  masculinePast: Word('пощёлкивал', 3),
  femininePast: Word('пощёлкивала', 3),
  neuterPast: Word('пощёлкивало', 3),
  pluralPast: Word('пощёлкивали', 3),
  imperativeInformal: Word('пощёлкивай', 3),
  imperativeFormal: Word('пощёлкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(пощёлкивать.name.text, пощёлкивать);

export { пощёлкивать };