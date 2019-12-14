import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбивать: PerfectVerb = {
  name: Word('сбивать', 4),
  singular1stPerson: Word('сбиваю', 4),
  singular2ndPerson: Word('сбиваешь', 4),
  singular3rdPerson: Word('сбивает', 4),
  plural1stPerson: Word('сбиваем', 4),
  plural2ndPerson: Word('сбиваете', 4),
  plural3rdPerson: Word('сбивают', 4),
  masculinePast: Word('сбивал', 4),
  femininePast: Word('сбивала', 4),
  neuterPast: Word('сбивало', 4),
  pluralPast: Word('сбивали', 4),
  imperativeInformal: Word('сбивай', 4),
  imperativeFormal: Word('сбивайте', 4),
  imperfect: ['сбить'],
};

perfectVerbs.set(сбивать.name.text, сбивать);

export { сбивать };