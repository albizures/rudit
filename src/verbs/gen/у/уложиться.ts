import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уложиться: PerfectVerb = {
  name: Word('уложиться', 4),
  singular1stPerson: Word('уложусь', 4),
  singular2ndPerson: Word('уложишься', 2),
  singular3rdPerson: Word('уложится', 2),
  plural1stPerson: Word('уложимся', 2),
  plural2ndPerson: Word('уложитесь', 2),
  plural3rdPerson: Word('уложатся', 2),
  masculinePast: Word('уложился', 4),
  femininePast: Word('уложилась', 4),
  neuterPast: Word('уложилось', 4),
  pluralPast: Word('уложились', 4),
  imperativeInformal: Word('уложись', 4),
  imperativeFormal: Word('уложитесь', 4),
  imperfect: [],
};

perfectVerbs.set(уложиться.name.text, уложиться);

export { уложиться };