import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закончиться: PerfectVerb = {
  name: Word('закончиться', 3),
  singular1stPerson: Word('закончусь', 3),
  singular2ndPerson: Word('закончишься', 3),
  singular3rdPerson: Word('закончится', 3),
  plural1stPerson: Word('закончимся', 3),
  plural2ndPerson: Word('закончитесь', 3),
  plural3rdPerson: Word('закончатся', 3),
  masculinePast: Word('закончился', 3),
  femininePast: Word('закончилась', 3),
  neuterPast: Word('закончилось', 3),
  pluralPast: Word('закончились', 3),
  imperativeInformal: Word('закончись', 3),
  imperativeFormal: Word('закончитесь', 3),
  imperfect: ['заканчиваться'],
};

perfectVerbs.set(закончиться.name.text, закончиться);

export { закончиться };