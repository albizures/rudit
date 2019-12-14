import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const польститься: PerfectVerb = {
  name: Word('польститься', 6),
  singular1stPerson: Word('польщусь', 5),
  singular2ndPerson: Word('польстишься', 6),
  singular3rdPerson: Word('польстится', 6),
  plural1stPerson: Word('польстимся', 6),
  plural2ndPerson: Word('польститесь', 6),
  plural3rdPerson: Word('польстятся', 6),
  masculinePast: Word('польстился', 6),
  femininePast: Word('польстилась', 6),
  neuterPast: Word('польстилось', 6),
  pluralPast: Word('польстились', 6),
  imperativeInformal: Word('польстись', 6),
  imperativeFormal: Word('польститесь', 6),
  imperfect: [],
};

perfectVerbs.set(польститься.name.text, польститься);

export { польститься };