import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впивать: PerfectVerb = {
  name: Word('впивать', 4),
  singular1stPerson: Word('впиваю', 4),
  singular2ndPerson: Word('впиваешь', 4),
  singular3rdPerson: Word('впивает', 4),
  plural1stPerson: Word('впиваем', 4),
  plural2ndPerson: Word('впиваете', 4),
  plural3rdPerson: Word('впивают', 4),
  masculinePast: Word('впивал', 4),
  femininePast: Word('впивала', 4),
  neuterPast: Word('впивало', 4),
  pluralPast: Word('впивали', 4),
  imperativeInformal: Word('впивай', 4),
  imperativeFormal: Word('впивайте', 4),
  imperfect: [],
};

perfectVerbs.set(впивать.name.text, впивать);

export { впивать };