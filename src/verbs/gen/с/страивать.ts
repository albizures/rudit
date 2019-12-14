import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const страивать: PerfectVerb = {
  name: Word('страивать', 3),
  singular1stPerson: Word('страиваю', 3),
  singular2ndPerson: Word('страиваешь', 3),
  singular3rdPerson: Word('страивает', 3),
  plural1stPerson: Word('страиваем', 3),
  plural2ndPerson: Word('страиваете', 3),
  plural3rdPerson: Word('страивают', 3),
  masculinePast: Word('страивал', 3),
  femininePast: Word('страивала', 3),
  neuterPast: Word('страивало', 3),
  pluralPast: Word('страивали', 3),
  imperativeInformal: Word('страивай', 3),
  imperativeFormal: Word('страивайте', 3),
  imperfect: [],
};

perfectVerbs.set(страивать.name.text, страивать);

export { страивать };