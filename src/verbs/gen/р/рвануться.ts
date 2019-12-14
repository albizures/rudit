import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рвануться: PerfectVerb = {
  name: Word('рвануться', 4),
  singular1stPerson: Word('рванусь', 4),
  singular2ndPerson: Word('рванёшься', 2),
  singular3rdPerson: Word('рванётся', 2),
  plural1stPerson: Word('рванёмся', 2),
  plural2ndPerson: Word('рванётесь', 2),
  plural3rdPerson: Word('рванутся', 4),
  masculinePast: Word('рванулся', 4),
  femininePast: Word('рванулась', 4),
  neuterPast: Word('рванулось', 4),
  pluralPast: Word('рванулись', 4),
  imperativeInformal: Word('рванись', 4),
  imperativeFormal: Word('рванитесь', 4),
  imperfect: [],
};

perfectVerbs.set(рвануться.name.text, рвануться);

export { рвануться };