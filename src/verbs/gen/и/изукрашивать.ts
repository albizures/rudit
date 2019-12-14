import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изукрашивать: PerfectVerb = {
  name: Word('изукрашивать', 5),
  singular1stPerson: Word('изукрашиваю', 5),
  singular2ndPerson: Word('изукрашиваешь', 5),
  singular3rdPerson: Word('изукрашивает', 5),
  plural1stPerson: Word('изукрашиваем', 5),
  plural2ndPerson: Word('изукрашиваете', 5),
  plural3rdPerson: Word('изукрашивают', 5),
  masculinePast: Word('изукрашивал', 5),
  femininePast: Word('изукрашивала', 5),
  neuterPast: Word('изукрашивало', 5),
  pluralPast: Word('изукрашивали', 5),
  imperativeInformal: Word('изукрашивай', 5),
  imperativeFormal: Word('изукрашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(изукрашивать.name.text, изукрашивать);

export { изукрашивать };