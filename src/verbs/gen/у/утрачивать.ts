import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрачивать: PerfectVerb = {
  name: Word('утрачивать', 3),
  singular1stPerson: Word('утрачиваю', 3),
  singular2ndPerson: Word('утрачиваешь', 3),
  singular3rdPerson: Word('утрачивает', 3),
  plural1stPerson: Word('утрачиваем', 3),
  plural2ndPerson: Word('утрачиваете', 3),
  plural3rdPerson: Word('утрачивают', 3),
  masculinePast: Word('утрачивал', 3),
  femininePast: Word('утрачивала', 3),
  neuterPast: Word('утрачивало', 3),
  pluralPast: Word('утрачивали', 3),
  imperativeInformal: Word('утрачивай', 3),
  imperativeFormal: Word('утрачивайте', 3),
  imperfect: ['утратить'],
};

perfectVerbs.set(утрачивать.name.text, утрачивать);

export { утрачивать };