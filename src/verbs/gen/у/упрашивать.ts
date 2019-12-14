import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрашивать: PerfectVerb = {
  name: Word('упрашивать', 3),
  singular1stPerson: Word('упрашиваю', 3),
  singular2ndPerson: Word('упрашиваешь', 3),
  singular3rdPerson: Word('упрашивает', 3),
  plural1stPerson: Word('упрашиваем', 3),
  plural2ndPerson: Word('упрашиваете', 3),
  plural3rdPerson: Word('упрашивают', 3),
  masculinePast: Word('упрашивал', 3),
  femininePast: Word('упрашивала', 3),
  neuterPast: Word('упрашивало', 3),
  pluralPast: Word('упрашивали', 3),
  imperativeInformal: Word('упрашивай', 3),
  imperativeFormal: Word('упрашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(упрашивать.name.text, упрашивать);

export { упрашивать };