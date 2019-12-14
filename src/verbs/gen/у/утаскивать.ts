import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утаскивать: PerfectVerb = {
  name: Word('утаскивать', 2),
  singular1stPerson: Word('утаскиваю', 2),
  singular2ndPerson: Word('утаскиваешь', 2),
  singular3rdPerson: Word('утаскивает', 2),
  plural1stPerson: Word('утаскиваем', 2),
  plural2ndPerson: Word('утаскиваете', 2),
  plural3rdPerson: Word('утаскивают', 2),
  masculinePast: Word('утаскивал', 2),
  femininePast: Word('утаскивала', 2),
  neuterPast: Word('утаскивало', 2),
  pluralPast: Word('утаскивали', 2),
  imperativeInformal: Word('утаскивай', 2),
  imperativeFormal: Word('утаскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(утаскивать.name.text, утаскивать);

export { утаскивать };