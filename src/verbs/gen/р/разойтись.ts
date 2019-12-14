import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разойтись: PerfectVerb = {
  name: Word('разойтись', 6),
  singular1stPerson: Word('разойдусь', 6),
  singular2ndPerson: Word('разойдёшься', 6),
  singular3rdPerson: Word('разойдётся', 6),
  plural1stPerson: Word('разойдёмся', 6),
  plural2ndPerson: Word('разойдётесь', 6),
  plural3rdPerson: Word('разойдутся', 6),
  masculinePast: Word('разошёлся', 5),
  femininePast: Word('разошлась', 6),
  neuterPast: Word('разошлось', 6),
  pluralPast: Word('разошлись', 6),
  imperativeInformal: Word('разойдись', 6),
  imperativeFormal: Word('разойдитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разойтись.name.text, разойтись);

export { разойтись };