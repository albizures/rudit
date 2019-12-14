import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горячиться: PerfectVerb = {
  name: Word('горячиться', 5),
  singular1stPerson: Word('горячусь', 5),
  singular2ndPerson: Word('горячишься', 5),
  singular3rdPerson: Word('горячится', 5),
  plural1stPerson: Word('горячимся', 5),
  plural2ndPerson: Word('горячитесь', 5),
  plural3rdPerson: Word('горячатся', 5),
  masculinePast: Word('горячился', 5),
  femininePast: Word('горячилась', 5),
  neuterPast: Word('горячилось', 5),
  pluralPast: Word('горячились', 5),
  imperativeInformal: Word('горячись', 5),
  imperativeFormal: Word('горячитесь', 5),
  imperfect: [],
};

perfectVerbs.set(горячиться.name.text, горячиться);

export { горячиться };