import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расклинивать: PerfectVerb = {
  name: Word('расклинивать', 5),
  singular1stPerson: Word('расклиниваю', 5),
  singular2ndPerson: Word('расклиниваешь', 5),
  singular3rdPerson: Word('расклинивает', 5),
  plural1stPerson: Word('расклиниваем', 5),
  plural2ndPerson: Word('расклиниваете', 5),
  plural3rdPerson: Word('расклинивают', 5),
  masculinePast: Word('расклинивал', 5),
  femininePast: Word('расклинивала', 5),
  neuterPast: Word('расклинивало', 5),
  pluralPast: Word('расклинивали', 5),
  imperativeInformal: Word('расклинивай', 5),
  imperativeFormal: Word('расклинивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расклинивать.name.text, расклинивать);

export { расклинивать };