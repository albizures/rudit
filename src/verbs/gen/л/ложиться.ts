import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ложиться: PerfectVerb = {
  name: Word('ложиться', 3),
  singular1stPerson: Word('ложусь', 3),
  singular2ndPerson: Word('ложишься', 3),
  singular3rdPerson: Word('ложится', 3),
  plural1stPerson: Word('ложимся', 3),
  plural2ndPerson: Word('ложитесь', 3),
  plural3rdPerson: Word('ложатся', 3),
  masculinePast: Word('ложился', 3),
  femininePast: Word('ложилась', 3),
  neuterPast: Word('ложилось', 3),
  pluralPast: Word('ложились', 3),
  imperativeInformal: Word('ложись', 3),
  imperativeFormal: Word('ложитесь', 3),
  imperfect: ['лечь'],
};

perfectVerbs.set(ложиться.name.text, ложиться);

export { ложиться };