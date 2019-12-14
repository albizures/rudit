import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помяться: PerfectVerb = {
  name: Word('помяться', 3),
  singular1stPerson: Word('помнусь', 4),
  singular2ndPerson: Word('помнёшься', 1),
  singular3rdPerson: Word('помнётся', 1),
  plural1stPerson: Word('помнёмся', 1),
  plural2ndPerson: Word('помнётесь', 6),
  plural3rdPerson: Word('помнутся', 4),
  masculinePast: Word('помялся', 3),
  femininePast: Word('помялась', 3),
  neuterPast: Word('помялось', 3),
  pluralPast: Word('помялись', 3),
  imperativeInformal: Word('помнись', 4),
  imperativeFormal: Word('помнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(помяться.name.text, помяться);

export { помяться };