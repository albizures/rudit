import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расползтись: PerfectVerb = {
  name: Word('расползтись', 8),
  singular1stPerson: Word('расползусь', 7),
  singular2ndPerson: Word('расползёшься', 1),
  singular3rdPerson: Word('расползётся', 1),
  plural1stPerson: Word('расползёмся', 1),
  plural2ndPerson: Word('расползётесь', 1),
  plural3rdPerson: Word('расползутся', 7),
  masculinePast: Word('расползся', 4),
  femininePast: Word('расползлась', 8),
  neuterPast: Word('расползлось', 8),
  pluralPast: Word('расползлись', 8),
  imperativeInformal: Word('расползись', 7),
  imperativeFormal: Word('расползитесь', 7),
  imperfect: [],
};

perfectVerbs.set(расползтись.name.text, расползтись);

export { расползтись };