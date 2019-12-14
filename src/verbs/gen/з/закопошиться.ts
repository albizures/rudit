import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закопошиться: PerfectVerb = {
  name: Word('закопошиться', 7),
  singular1stPerson: Word('закопошусь', 7),
  singular2ndPerson: Word('закопошишься', 7),
  singular3rdPerson: Word('закопошится', 7),
  plural1stPerson: Word('закопошимся', 7),
  plural2ndPerson: Word('закопошитесь', 7),
  plural3rdPerson: Word('закопошатся', 7),
  masculinePast: Word('закопошился', 7),
  femininePast: Word('закопошилась', 7),
  neuterPast: Word('закопошилось', 7),
  pluralPast: Word('закопошились', 7),
  imperativeInformal: Word('закопошись', 7),
  imperativeFormal: Word('закопошитесь', 7),
  imperfect: [],
};

perfectVerbs.set(закопошиться.name.text, закопошиться);

export { закопошиться };