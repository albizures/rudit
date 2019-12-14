import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обойтись: PerfectVerb = {
  name: Word('обойтись', 5),
  singular1stPerson: Word('обойдусь', 5),
  singular2ndPerson: Word('обойдёшься', 0),
  singular3rdPerson: Word('обойдётся', 0),
  plural1stPerson: Word('обойдёмся', 0),
  plural2ndPerson: Word('обойдётесь', 7),
  plural3rdPerson: Word('обойдутся', 5),
  masculinePast: Word('обошёлся', 0),
  femininePast: Word('обошлась', 5),
  neuterPast: Word('обошлось', 5),
  pluralPast: Word('обошлись', 5),
  imperativeInformal: Word('обойдись', 5),
  imperativeFormal: Word('обойдитесь', 5),
  imperfect: ['обходиться'],
};

perfectVerbs.set(обойтись.name.text, обойтись);

export { обойтись };