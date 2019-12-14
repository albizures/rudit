import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сползтись: PerfectVerb = {
  name: Word('сползтись', 6),
  singular1stPerson: Word('сползусь', 5),
  singular2ndPerson: Word('сползёшься', 5),
  singular3rdPerson: Word('сползётся', 5),
  plural1stPerson: Word('сползёмся', 5),
  plural2ndPerson: Word('сползётесь', 5),
  plural3rdPerson: Word('сползутся', 5),
  masculinePast: Word('сползся', 2),
  femininePast: Word('сползлась', 6),
  neuterPast: Word('сползлось', 6),
  pluralPast: Word('сползлись', 6),
  imperativeInformal: Word('сползись', 5),
  imperativeFormal: Word('сползитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сползтись.name.text, сползтись);

export { сползтись };