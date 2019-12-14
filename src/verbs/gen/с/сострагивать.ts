import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сострагивать: PerfectVerb = {
  name: Word('сострагивать', 5),
  singular1stPerson: Word('сострагиваю', 5),
  singular2ndPerson: Word('сострагиваешь', 5),
  singular3rdPerson: Word('сострагивает', 5),
  plural1stPerson: Word('сострагиваем', 5),
  plural2ndPerson: Word('сострагиваете', 5),
  plural3rdPerson: Word('сострагивают', 5),
  masculinePast: Word('сострагивал', 5),
  femininePast: Word('сострагивала', 5),
  neuterPast: Word('сострагивало', 5),
  pluralPast: Word('сострагивали', 5),
  imperativeInformal: Word('сострагивай', 5),
  imperativeFormal: Word('сострагивайте', 5),
  imperfect: [],
};

perfectVerbs.set(сострагивать.name.text, сострагивать);

export { сострагивать };