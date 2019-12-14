import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздраконивать: PerfectVerb = {
  name: Word('раздраконивать', 7),
  singular1stPerson: Word('раздракониваю', 7),
  singular2ndPerson: Word('раздракониваешь', 7),
  singular3rdPerson: Word('раздраконивает', 7),
  plural1stPerson: Word('раздракониваем', 7),
  plural2ndPerson: Word('раздракониваете', 7),
  plural3rdPerson: Word('раздраконивают', 7),
  masculinePast: Word('раздраконивал', 7),
  femininePast: Word('раздраконивала', 7),
  neuterPast: Word('раздраконивало', 7),
  pluralPast: Word('раздраконивали', 7),
  imperativeInformal: Word('раздраконивай', 7),
  imperativeFormal: Word('раздраконивайте', 7),
  imperfect: [],
};

perfectVerbs.set(раздраконивать.name.text, раздраконивать);

export { раздраконивать };