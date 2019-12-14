import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утаивать: PerfectVerb = {
  name: Word('утаивать', 2),
  singular1stPerson: Word('утаиваю', 2),
  singular2ndPerson: Word('утаиваешь', 2),
  singular3rdPerson: Word('утаивает', 2),
  plural1stPerson: Word('утаиваем', 2),
  plural2ndPerson: Word('утаиваете', 2),
  plural3rdPerson: Word('утаивают', 2),
  masculinePast: Word('утаивал', 2),
  femininePast: Word('утаивала', 2),
  neuterPast: Word('утаивало', 2),
  pluralPast: Word('утаивали', 2),
  imperativeInformal: Word('утаивай', 2),
  imperativeFormal: Word('утаивайте', 2),
  imperfect: [],
};

perfectVerbs.set(утаивать.name.text, утаивать);

export { утаивать };