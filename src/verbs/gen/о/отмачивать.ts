import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмачивать: PerfectVerb = {
  name: Word('отмачивать', 3),
  singular1stPerson: Word('отмачиваю', 3),
  singular2ndPerson: Word('отмачиваешь', 3),
  singular3rdPerson: Word('отмачивает', 3),
  plural1stPerson: Word('отмачиваем', 3),
  plural2ndPerson: Word('отмачиваете', 3),
  plural3rdPerson: Word('отмачивают', 3),
  masculinePast: Word('отмачивал', 3),
  femininePast: Word('отмачивала', 3),
  neuterPast: Word('отмачивало', 3),
  pluralPast: Word('отмачивали', 3),
  imperativeInformal: Word('отмачивай', 3),
  imperativeFormal: Word('отмачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отмачивать.name.text, отмачивать);

export { отмачивать };