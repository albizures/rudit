import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утраивать: PerfectVerb = {
  name: Word('утраивать', 3),
  singular1stPerson: Word('утраиваю', 3),
  singular2ndPerson: Word('утраиваешь', 3),
  singular3rdPerson: Word('утраивает', 3),
  plural1stPerson: Word('утраиваем', 3),
  plural2ndPerson: Word('утраиваете', 3),
  plural3rdPerson: Word('утраивают', 3),
  masculinePast: Word('утраивал', 3),
  femininePast: Word('утраивала', 3),
  neuterPast: Word('утраивало', 3),
  pluralPast: Word('утраивали', 3),
  imperativeInformal: Word('утраивай', 3),
  imperativeFormal: Word('утраивайте', 3),
  imperfect: [],
};

perfectVerbs.set(утраивать.name.text, утраивать);

export { утраивать };