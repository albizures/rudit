import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обойтись: PerfectVerb = {
  name: Word('обойтись', 5),
  singular1stPerson: Word('обойдусь', 5),
  singular2ndPerson: Word('обойдёшься', 5),
  singular3rdPerson: Word('обойдётся', 5),
  plural1stPerson: Word('обойдёмся', 5),
  plural2ndPerson: Word('обойдётесь', 5),
  plural3rdPerson: Word('обойдутся', 5),
  masculinePast: Word('обошёлся', 4),
  femininePast: Word('обошлась', 5),
  neuterPast: Word('обошлось', 5),
  pluralPast: Word('обошлись', 5),
  imperativeInformal: Word('обойдись', 5),
  imperativeFormal: Word('обойдитесь', 5),
  imperfect: ['обходиться'],
};

perfectVerbs.set(обойтись.name.text, обойтись);

export { обойтись };