import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пощёлкивать: PerfectVerb = {
  name: Word('пощёлкивать', 8),
  singular1stPerson: Word('пощёлкиваю', 8),
  singular2ndPerson: Word('пощёлкиваешь', 8),
  singular3rdPerson: Word('пощёлкивает', 8),
  plural1stPerson: Word('пощёлкиваем', 8),
  plural2ndPerson: Word('пощёлкиваете', 8),
  plural3rdPerson: Word('пощёлкивают', 8),
  masculinePast: Word('пощёлкивал', 8),
  femininePast: Word('пощёлкивала', 8),
  neuterPast: Word('пощёлкивало', 8),
  pluralPast: Word('пощёлкивали', 8),
  imperativeInformal: Word('пощёлкивай', 8),
  imperativeFormal: Word('пощёлкивайте', 8),
  imperfect: [],
};

perfectVerbs.set(пощёлкивать.name.text, пощёлкивать);

export { пощёлкивать };