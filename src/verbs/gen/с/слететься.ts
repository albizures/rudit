import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слететься: PerfectVerb = {
  name: Word('слететься', 4),
  singular1stPerson: Word('слечусь', 4),
  singular2ndPerson: Word('слетишься', 4),
  singular3rdPerson: Word('слетится', 4),
  plural1stPerson: Word('слетимся', 4),
  plural2ndPerson: Word('слетитесь', 4),
  plural3rdPerson: Word('слетятся', 4),
  masculinePast: Word('слетелся', 4),
  femininePast: Word('слетелась', 4),
  neuterPast: Word('слетелось', 4),
  pluralPast: Word('слетелись', 4),
  imperativeInformal: Word('слетись', 4),
  imperativeFormal: Word('слетитесь', 4),
  imperfect: [],
};

perfectVerbs.set(слететься.name.text, слететься);

export { слететься };