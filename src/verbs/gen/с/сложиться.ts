import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сложиться: PerfectVerb = {
  name: Word('сложиться', 4),
  singular1stPerson: Word('сложусь', 4),
  singular2ndPerson: Word('сложишься', 2),
  singular3rdPerson: Word('сложится', 2),
  plural1stPerson: Word('сложимся', 2),
  plural2ndPerson: Word('сложитесь', 2),
  plural3rdPerson: Word('сложатся', 2),
  masculinePast: Word('сложился', 4),
  femininePast: Word('сложилась', 4),
  neuterPast: Word('сложилось', 4),
  pluralPast: Word('сложились', 4),
  imperativeInformal: Word('сложись', 4),
  imperativeFormal: Word('сложитесь', 4),
  imperfect: ['складываться'],
};

perfectVerbs.set(сложиться.name.text, сложиться);

export { сложиться };