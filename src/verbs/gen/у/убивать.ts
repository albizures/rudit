import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убивать: PerfectVerb = {
  name: Word('убивать', 4),
  singular1stPerson: Word('убиваю', 4),
  singular2ndPerson: Word('убиваешь', 4),
  singular3rdPerson: Word('убивает', 4),
  plural1stPerson: Word('убиваем', 4),
  plural2ndPerson: Word('убиваете', 4),
  plural3rdPerson: Word('убивают', 4),
  masculinePast: Word('убивал', 4),
  femininePast: Word('убивала', 4),
  neuterPast: Word('убивало', 4),
  pluralPast: Word('убивали', 4),
  imperativeInformal: Word('убивай', 4),
  imperativeFormal: Word('убивайте', 4),
  imperfect: ['убить'],
};

perfectVerbs.set(убивать.name.text, убивать);

export { убивать };