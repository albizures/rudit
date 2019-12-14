import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ребячиться: PerfectVerb = {
  name: Word('ребячиться', 3),
  singular1stPerson: Word('ребячусь', 3),
  singular2ndPerson: Word('ребячишься', 3),
  singular3rdPerson: Word('ребячится', 3),
  plural1stPerson: Word('ребячимся', 3),
  plural2ndPerson: Word('ребячитесь', 3),
  plural3rdPerson: Word('ребячатся', 3),
  masculinePast: Word('ребячился', 3),
  femininePast: Word('ребячилась', 3),
  neuterPast: Word('ребячилось', 3),
  pluralPast: Word('ребячились', 3),
  imperativeInformal: Word('ребячься', 3),
  imperativeFormal: Word('ребячьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ребячиться.name.text, ребячиться);

export { ребячиться };