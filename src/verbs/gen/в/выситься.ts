import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выситься: PerfectVerb = {
  name: Word('выситься', 1),
  singular1stPerson: Word('вышусь', 1),
  singular2ndPerson: Word('высишься', 1),
  singular3rdPerson: Word('высится', 1),
  plural1stPerson: Word('высимся', 1),
  plural2ndPerson: Word('выситесь', 1),
  plural3rdPerson: Word('высятся', 1),
  masculinePast: Word('высился', 1),
  femininePast: Word('высилась', 1),
  neuterPast: Word('высилось', 1),
  pluralPast: Word('высились', 1),
  imperativeInformal: Word('высьсся', 1),
  imperativeFormal: Word('высьстесь', 1),
  imperfect: [],
};

perfectVerbs.set(выситься.name.text, выситься);

export { выситься };