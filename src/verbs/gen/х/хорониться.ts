import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хорониться: PerfectVerb = {
  name: Word('хорониться', 5),
  singular1stPerson: Word('хоронюсь', 5),
  singular2ndPerson: Word('хоронишься', 3),
  singular3rdPerson: Word('хоронится', 3),
  plural1stPerson: Word('хоронимся', 3),
  plural2ndPerson: Word('хоронитесь', 3),
  plural3rdPerson: Word('хоронятся', 3),
  masculinePast: Word('хоронился', 5),
  femininePast: Word('хоронилась', 5),
  neuterPast: Word('хоронилось', 5),
  pluralPast: Word('хоронились', 5),
  imperativeInformal: Word('хоронись', 5),
  imperativeFormal: Word('хоронитесь', 5),
  imperfect: [],
};

perfectVerbs.set(хорониться.name.text, хорониться);

export { хорониться };