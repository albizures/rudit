import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const душиться: PerfectVerb = {
  name: Word('душиться', 3),
  singular1stPerson: Word('душусь', 3),
  singular2ndPerson: Word('душишься', 1),
  singular3rdPerson: Word('душится', 1),
  plural1stPerson: Word('душимся', 1),
  plural2ndPerson: Word('душитесь', 1),
  plural3rdPerson: Word('душатся', 1),
  masculinePast: Word('душился', 3),
  femininePast: Word('душилась', 3),
  neuterPast: Word('душилось', 3),
  pluralPast: Word('душились', 3),
  imperativeInformal: Word('душись', 3),
  imperativeFormal: Word('душитесь', 3),
  imperfect: [],
};

perfectVerbs.set(душиться.name.text, душиться);

export { душиться };