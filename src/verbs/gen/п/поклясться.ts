import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поклясться: PerfectVerb = {
  name: Word('поклясться', 4),
  singular1stPerson: Word('поклянусь', 6),
  singular2ndPerson: Word('поклянёшься', 6),
  singular3rdPerson: Word('поклянётся', 6),
  plural1stPerson: Word('поклянёмся', 6),
  plural2ndPerson: Word('поклянётесь', 6),
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