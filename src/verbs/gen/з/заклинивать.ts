import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклинивать: PerfectVerb = {
  name: Word('заклинивать', 4),
  singular1stPerson: Word('заклиниваю', 4),
  singular2ndPerson: Word('заклиниваешь', 4),
  singular3rdPerson: Word('заклинивает', 4),
  plural1stPerson: Word('заклиниваем', 4),
  plural2ndPerson: Word('заклиниваете', 4),
  plural3rdPerson: Word('заклинивают', 4),
  masculinePast: Word('заклинивал', 4),
  femininePast: Word('заклинивала', 4),
  neuterPast: Word('заклинивало', 4),
  pluralPast: Word('заклинивали', 4),
  imperativeInformal: Word('заклинивай', 4),
  imperativeFormal: Word('заклинивайте', 4),
  imperfect: [],
};

perfectVerbs.set(заклинивать.name.text, заклинивать);

export { заклинивать };