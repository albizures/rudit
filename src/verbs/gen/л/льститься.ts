import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const льститься: PerfectVerb = {
  name: Word('льститься', 4),
  singular1stPerson: Word('льщусь', 3),
  singular2ndPerson: Word('льстишься', 4),
  singular3rdPerson: Word('льстится', 4),
  plural1stPerson: Word('льстимся', 4),
  plural2ndPerson: Word('льститесь', 4),
  plural3rdPerson: Word('льстятся', 4),
  masculinePast: Word('льстился', 4),
  femininePast: Word('льстилась', 4),
  neuterPast: Word('льстилось', 4),
  pluralPast: Word('льстились', 4),
  imperativeInformal: Word('льстись', 4),
  imperativeFormal: Word('льститесь', 4),
  imperfect: [],
};

perfectVerbs.set(льститься.name.text, льститься);

export { льститься };