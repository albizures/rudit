import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искрошиться: PerfectVerb = {
  name: Word('искрошиться', 6),
  singular1stPerson: Word('искрошусь', 6),
  singular2ndPerson: Word('искрошишься', 4),
  singular3rdPerson: Word('искрошится', 4),
  plural1stPerson: Word('искрошимся', 4),
  plural2ndPerson: Word('искрошитесь', 4),
  plural3rdPerson: Word('искрошатся', 4),
  masculinePast: Word('искрошился', 6),
  femininePast: Word('искрошилась', 6),
  neuterPast: Word('искрошилось', 6),
  pluralPast: Word('искрошились', 6),
  imperativeInformal: Word('искрошись', 6),
  imperativeFormal: Word('искрошитесь', 6),
  imperfect: [],
};

perfectVerbs.set(искрошиться.name.text, искрошиться);

export { искрошиться };