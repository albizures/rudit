import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывернуться: PerfectVerb = {
  name: Word('вывернуться', 1),
  singular1stPerson: Word('вывернусь', 1),
  singular2ndPerson: Word('вывернешься', 1),
  singular3rdPerson: Word('вывернется', 1),
  plural1stPerson: Word('вывернемся', 1),
  plural2ndPerson: Word('вывернетесь', 1),
  plural3rdPerson: Word('вывернутся', 1),
  masculinePast: Word('вывернулся', 1),
  femininePast: Word('вывернулась', 1),
  neuterPast: Word('вывернулось', 1),
  pluralPast: Word('вывернулись', 1),
  imperativeInformal: Word('вывернись', 1),
  imperativeFormal: Word('вывернитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вывернуться.name.text, вывернуться);

export { вывернуться };