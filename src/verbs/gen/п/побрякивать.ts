import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побрякивать: PerfectVerb = {
  name: Word('побрякивать', 4),
  singular1stPerson: Word('побрякиваю', 4),
  singular2ndPerson: Word('побрякиваешь', 4),
  singular3rdPerson: Word('побрякивает', 4),
  plural1stPerson: Word('побрякиваем', 4),
  plural2ndPerson: Word('побрякиваете', 4),
  plural3rdPerson: Word('побрякивают', 4),
  masculinePast: Word('побрякивал', 4),
  femininePast: Word('побрякивала', 4),
  neuterPast: Word('побрякивало', 4),
  pluralPast: Word('побрякивали', 4),
  imperativeInformal: Word('побрякивай', 4),
  imperativeFormal: Word('побрякивайте', 4),
  imperfect: [],
};

perfectVerbs.set(побрякивать.name.text, побрякивать);

export { побрякивать };