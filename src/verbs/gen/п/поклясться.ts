import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поклясться: PerfectVerb = {
  name: Word('поклясться', 4),
  singular1stPerson: Word('поклянусь', 6),
  singular2ndPerson: Word('поклянёшься', 1),
  singular3rdPerson: Word('поклянётся', 1),
  plural1stPerson: Word('поклянёмся', 1),
  plural2ndPerson: Word('поклянётесь', 8),
  plural3rdPerson: Word('поклянутся', 6),
  masculinePast: Word('поклялся', 4),
  femininePast: Word('поклялась', 6),
  neuterPast: Word('поклялось,покляло'сь', 4),
  pluralPast: Word('поклялись,покляли'сь', 4),
  imperativeInformal: Word('поклянись', 6),
  imperativeFormal: Word('поклянитесь', 6),
  imperfect: ['клясться'],
};

perfectVerbs.set(поклясться.name.text, поклясться);

export { поклясться };