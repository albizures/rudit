import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впихивать: PerfectVerb = {
  name: Word('впихивать', 2),
  singular1stPerson: Word('впихиваю', 2),
  singular2ndPerson: Word('впихиваешь', 2),
  singular3rdPerson: Word('впихивает', 2),
  plural1stPerson: Word('впихиваем', 2),
  plural2ndPerson: Word('впихиваете', 2),
  plural3rdPerson: Word('впихивают', 2),
  masculinePast: Word('впихивал', 2),
  femininePast: Word('впихивала', 2),
  neuterPast: Word('впихивало', 2),
  pluralPast: Word('впихивали', 2),
  imperativeInformal: Word('впихивай', 2),
  imperativeFormal: Word('впихивайте', 2),
  imperfect: [],
};

perfectVerbs.set(впихивать.name.text, впихивать);

export { впихивать };