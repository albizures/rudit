import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клясться: PerfectVerb = {
  name: Word('клясться', 2),
  singular1stPerson: Word('клянусь', 4),
  singular2ndPerson: Word('клянёшься', 4),
  singular3rdPerson: Word('клянётся', 4),
  plural1stPerson: Word('клянёмся', 4),
  plural2ndPerson: Word('клянётесь', 4),
  plural3rdPerson: Word('клянутся', 4),
  masculinePast: Word('клялся', 2),
  femininePast: Word('клялась', 4),
  neuterPast: Word('клялось,кляло'сь', 2),
  pluralPast: Word('клялись,кляли'сь', 2),
  imperativeInformal: Word('клянись', 4),
  imperativeFormal: Word('клянитесь', 4),
  imperfect: ['поклясться'],
};

perfectVerbs.set(клясться.name.text, клясться);

export { клясться };