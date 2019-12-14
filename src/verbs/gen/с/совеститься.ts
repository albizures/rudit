import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совеститься: PerfectVerb = {
  name: Word('совеститься', 1),
  singular1stPerson: Word('совещусь', 1),
  singular2ndPerson: Word('совестишься', 1),
  singular3rdPerson: Word('совестится', 1),
  plural1stPerson: Word('совестимся', 1),
  plural2ndPerson: Word('совеститесь', 1),
  plural3rdPerson: Word('совестятся', 1),
  masculinePast: Word('совестился', 1),
  femininePast: Word('совестилась', 1),
  neuterPast: Word('совестилось', 1),
  pluralPast: Word('совестились', 1),
  imperativeInformal: Word('совестись', 1),
  imperativeFormal: Word('совеститесь', 1),
  imperfect: [],
};

perfectVerbs.set(совеститься.name.text, совеститься);

export { совеститься };