import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утягивать: PerfectVerb = {
  name: Word('утягивать', 2),
  singular1stPerson: Word('утягиваю', 2),
  singular2ndPerson: Word('утягиваешь', 2),
  singular3rdPerson: Word('утягивает', 2),
  plural1stPerson: Word('утягиваем', 2),
  plural2ndPerson: Word('утягиваете', 2),
  plural3rdPerson: Word('утягивают', 2),
  masculinePast: Word('утягивал', 2),
  femininePast: Word('утягивала', 2),
  neuterPast: Word('утягивало', 2),
  pluralPast: Word('утягивали', 2),
  imperativeInformal: Word('утягивай', 2),
  imperativeFormal: Word('утягивайте', 2),
  imperfect: [],
};

perfectVerbs.set(утягивать.name.text, утягивать);

export { утягивать };