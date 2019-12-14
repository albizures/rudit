import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остановиться: PerfectVerb = {
  name: Word('остановиться', 7),
  singular1stPerson: Word('остановлюсь', 8),
  singular2ndPerson: Word('остановишься', 5),
  singular3rdPerson: Word('остановится', 5),
  plural1stPerson: Word('остановимся', 5),
  plural2ndPerson: Word('остановитесь', 5),
  plural3rdPerson: Word('остановятся', 5),
  masculinePast: Word('остановился', 7),
  femininePast: Word('остановилась', 7),
  neuterPast: Word('остановилось', 7),
  pluralPast: Word('остановились', 7),
  imperativeInformal: Word('остановись', 7),
  imperativeFormal: Word('остановитесь', 7),
  imperfect: ['останавливаться'],
};

perfectVerbs.set(остановиться.name.text, остановиться);

export { остановиться };