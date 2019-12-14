import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворошиться: PerfectVerb = {
  name: Word('ворошиться', 5),
  singular1stPerson: Word('ворошусь', 5),
  singular2ndPerson: Word('ворошишься', 5),
  singular3rdPerson: Word('ворошится', 5),
  plural1stPerson: Word('ворошимся', 5),
  plural2ndPerson: Word('ворошитесь', 5),
  plural3rdPerson: Word('ворошатся', 5),
  masculinePast: Word('ворошился', 5),
  femininePast: Word('ворошилась', 5),
  neuterPast: Word('ворошилось', 5),
  pluralPast: Word('ворошились', 5),
  imperativeInformal: Word('ворошись', 5),
  imperativeFormal: Word('ворошитесь', 5),
  imperfect: [],
};

perfectVerbs.set(ворошиться.name.text, ворошиться);

export { ворошиться };