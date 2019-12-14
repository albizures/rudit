import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запугивать: PerfectVerb = {
  name: Word('запугивать', 3),
  singular1stPerson: Word('запугиваю', 3),
  singular2ndPerson: Word('запугиваешь', 3),
  singular3rdPerson: Word('запугивает', 3),
  plural1stPerson: Word('запугиваем', 3),
  plural2ndPerson: Word('запугиваете', 3),
  plural3rdPerson: Word('запугивают', 3),
  masculinePast: Word('запугивал', 3),
  femininePast: Word('запугивала', 3),
  neuterPast: Word('запугивало', 3),
  pluralPast: Word('запугивали', 3),
  imperativeInformal: Word('запугивай', 3),
  imperativeFormal: Word('запугивайте', 3),
  imperfect: ['запугать'],
};

perfectVerbs.set(запугивать.name.text, запугивать);

export { запугивать };