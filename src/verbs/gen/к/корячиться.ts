import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корячиться: PerfectVerb = {
  name: Word('корячиться', 3),
  singular1stPerson: Word('корячусь', 3),
  singular2ndPerson: Word('корячишься', 3),
  singular3rdPerson: Word('корячится', 3),
  plural1stPerson: Word('корячимся', 3),
  plural2ndPerson: Word('корячитесь', 3),
  plural3rdPerson: Word('корячатся', 3),
  masculinePast: Word('корячился', 3),
  femininePast: Word('корячилась', 3),
  neuterPast: Word('корячилось', 3),
  pluralPast: Word('корячились', 3),
  imperativeInformal: Word('корячься', 3),
  imperativeFormal: Word('корячьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(корячиться.name.text, корячиться);

export { корячиться };