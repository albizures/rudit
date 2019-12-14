import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окончиться: PerfectVerb = {
  name: Word('окончиться', 2),
  singular1stPerson: Word('окончусь', 2),
  singular2ndPerson: Word('окончишься', 2),
  singular3rdPerson: Word('окончится', 2),
  plural1stPerson: Word('окончимся', 2),
  plural2ndPerson: Word('окончитесь', 2),
  plural3rdPerson: Word('окончатся', 2),
  masculinePast: Word('окончился', 2),
  femininePast: Word('окончилась', 2),
  neuterPast: Word('окончилось', 2),
  pluralPast: Word('окончились', 2),
  imperativeInformal: Word('окончись', 2),
  imperativeFormal: Word('окончитесь', 2),
  imperfect: ['оканчиваться'],
};

perfectVerbs.set(окончиться.name.text, окончиться);

export { окончиться };