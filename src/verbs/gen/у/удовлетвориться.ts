import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удовлетвориться: PerfectVerb = {
  name: Word('удовлетвориться', 10),
  singular1stPerson: Word('удовлетворюсь', 10),
  singular2ndPerson: Word('удовлетворишься', 10),
  singular3rdPerson: Word('удовлетворится', 10),
  plural1stPerson: Word('удовлетворимся', 10),
  plural2ndPerson: Word('удовлетворитесь', 10),
  plural3rdPerson: Word('удовлетворятся', 10),
  masculinePast: Word('удовлетворился', 10),
  femininePast: Word('удовлетворилась', 10),
  neuterPast: Word('удовлетворилось', 10),
  pluralPast: Word('удовлетворились', 10),
  imperativeInformal: Word('удовлетворись', 10),
  imperativeFormal: Word('удовлетворитесь', 10),
  imperfect: [],
};

perfectVerbs.set(удовлетвориться.name.text, удовлетвориться);

export { удовлетвориться };