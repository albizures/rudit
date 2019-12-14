import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const углубляться: PerfectVerb = {
  name: Word('углубляться', 6),
  singular1stPerson: Word('углубляюсь', 6),
  singular2ndPerson: Word('углубляешься', 6),
  singular3rdPerson: Word('углубляется', 6),
  plural1stPerson: Word('углубляемся', 6),
  plural2ndPerson: Word('углубляетесь', 6),
  plural3rdPerson: Word('углубляются', 6),
  masculinePast: Word('углублялся', 6),
  femininePast: Word('углублялась', 6),
  neuterPast: Word('углублялось', 6),
  pluralPast: Word('углублялись', 6),
  imperativeInformal: Word('углубляйся', 6),
  imperativeFormal: Word('углубляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(углубляться.name.text, углубляться);

export { углубляться };