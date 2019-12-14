import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натягивать: PerfectVerb = {
  name: Word('натягивать', 3),
  singular1stPerson: Word('натягиваю', 3),
  singular2ndPerson: Word('натягиваешь', 3),
  singular3rdPerson: Word('натягивает', 3),
  plural1stPerson: Word('натягиваем', 3),
  plural2ndPerson: Word('натягиваете', 3),
  plural3rdPerson: Word('натягивают', 3),
  masculinePast: Word('натягивал', 3),
  femininePast: Word('натягивала', 3),
  neuterPast: Word('натягивало', 3),
  pluralPast: Word('натягивали', 3),
  imperativeInformal: Word('натягивай', 3),
  imperativeFormal: Word('натягивайте', 3),
  imperfect: [],
};

perfectVerbs.set(натягивать.name.text, натягивать);

export { натягивать };