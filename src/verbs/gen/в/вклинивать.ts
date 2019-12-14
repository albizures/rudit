import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклинивать: PerfectVerb = {
  name: Word('вклинивать', 3),
  singular1stPerson: Word('вклиниваю', 3),
  singular2ndPerson: Word('вклиниваешь', 3),
  singular3rdPerson: Word('вклинивает', 3),
  plural1stPerson: Word('вклиниваем', 3),
  plural2ndPerson: Word('вклиниваете', 3),
  plural3rdPerson: Word('вклинивают', 3),
  masculinePast: Word('вклинивал', 3),
  femininePast: Word('вклинивала', 3),
  neuterPast: Word('вклинивало', 3),
  pluralPast: Word('вклинивали', 3),
  imperativeInformal: Word('вклинивай', 3),
  imperativeFormal: Word('вклинивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вклинивать.name.text, вклинивать);

export { вклинивать };