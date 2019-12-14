import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окисляться: PerfectVerb = {
  name: Word('окисляться', 5),
  singular1stPerson: Word('окисляюсь', 5),
  singular2ndPerson: Word('окисляешься', 5),
  singular3rdPerson: Word('окисляется', 5),
  plural1stPerson: Word('окисляемся', 5),
  plural2ndPerson: Word('окисляетесь', 5),
  plural3rdPerson: Word('окисляются', 5),
  masculinePast: Word('окислялся', 5),
  femininePast: Word('окислялась', 5),
  neuterPast: Word('окислялось', 5),
  pluralPast: Word('окислялись', 5),
  imperativeInformal: Word('окисляйся', 5),
  imperativeFormal: Word('окисляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(окисляться.name.text, окисляться);

export { окисляться };