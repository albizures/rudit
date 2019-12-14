import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осваивать: PerfectVerb = {
  name: Word('осваивать', 3),
  singular1stPerson: Word('осваиваю', 3),
  singular2ndPerson: Word('осваиваешь', 3),
  singular3rdPerson: Word('осваивает', 3),
  plural1stPerson: Word('осваиваем', 3),
  plural2ndPerson: Word('осваиваете', 3),
  plural3rdPerson: Word('осваивают', 3),
  masculinePast: Word('осваивал', 3),
  femininePast: Word('осваивала', 3),
  neuterPast: Word('осваивало', 3),
  pluralPast: Word('осваивали', 3),
  imperativeInformal: Word('осваивай', 3),
  imperativeFormal: Word('осваивайте', 3),
  imperfect: [],
};

perfectVerbs.set(осваивать.name.text, осваивать);

export { осваивать };