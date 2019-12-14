import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поститься: PerfectVerb = {
  name: Word('поститься', 4),
  singular1stPerson: Word('пощусь', 3),
  singular2ndPerson: Word('постишься', 4),
  singular3rdPerson: Word('постится', 4),
  plural1stPerson: Word('постимся', 4),
  plural2ndPerson: Word('поститесь', 4),
  plural3rdPerson: Word('постятся', 4),
  masculinePast: Word('постился', 4),
  femininePast: Word('постилась', 4),
  neuterPast: Word('постилось', 4),
  pluralPast: Word('постились', 4),
  imperativeInformal: Word('постись', 4),
  imperativeFormal: Word('поститесь', 4),
  imperfect: [],
};

perfectVerbs.set(поститься.name.text, поститься);

export { поститься };