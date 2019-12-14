import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побивать: PerfectVerb = {
  name: Word('побивать', 5),
  singular1stPerson: Word('побиваю', 5),
  singular2ndPerson: Word('побиваешь', 5),
  singular3rdPerson: Word('побивает', 5),
  plural1stPerson: Word('побиваем', 5),
  plural2ndPerson: Word('побиваете', 5),
  plural3rdPerson: Word('побивают', 5),
  masculinePast: Word('побивал', 5),
  femininePast: Word('побивала', 5),
  neuterPast: Word('побивало', 5),
  pluralPast: Word('побивали', 5),
  imperativeInformal: Word('побивай', 5),
  imperativeFormal: Word('побивайте', 5),
  imperfect: [],
};

perfectVerbs.set(побивать.name.text, побивать);

export { побивать };