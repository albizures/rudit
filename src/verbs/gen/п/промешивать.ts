import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промешивать: PerfectVerb = {
  name: Word('промешивать', 4),
  singular1stPerson: Word('промешиваю', 4),
  singular2ndPerson: Word('промешиваешь', 4),
  singular3rdPerson: Word('промешивает', 4),
  plural1stPerson: Word('промешиваем', 4),
  plural2ndPerson: Word('промешиваете', 4),
  plural3rdPerson: Word('промешивают', 4),
  masculinePast: Word('промешивал', 4),
  femininePast: Word('промешивала', 4),
  neuterPast: Word('промешивало', 4),
  pluralPast: Word('промешивали', 4),
  imperativeInformal: Word('промешивай', 4),
  imperativeFormal: Word('промешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(промешивать.name.text, промешивать);

export { промешивать };