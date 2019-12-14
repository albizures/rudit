import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расписаться: PerfectVerb = {
  name: Word('расписаться', 6),
  singular1stPerson: Word('распишусь', 6),
  singular2ndPerson: Word('распишешься', 4),
  singular3rdPerson: Word('распишется', 4),
  plural1stPerson: Word('распишемся', 4),
  plural2ndPerson: Word('распишетесь', 4),
  plural3rdPerson: Word('распишутся', 4),
  masculinePast: Word('расписался', 6),
  femininePast: Word('расписалась', 6),
  neuterPast: Word('расписалось', 6),
  pluralPast: Word('расписались', 6),
  imperativeInformal: Word('распишись', 6),
  imperativeFormal: Word('распишитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расписаться.name.text, расписаться);

export { расписаться };