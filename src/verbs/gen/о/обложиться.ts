import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обложиться: PerfectVerb = {
  name: Word('обложиться', 5),
  singular1stPerson: Word('обложусь', 5),
  singular2ndPerson: Word('обложишься', 3),
  singular3rdPerson: Word('обложится', 3),
  plural1stPerson: Word('обложимся', 3),
  plural2ndPerson: Word('обложитесь', 3),
  plural3rdPerson: Word('обложатся', 3),
  masculinePast: Word('обложился', 5),
  femininePast: Word('обложилась', 5),
  neuterPast: Word('обложилось', 5),
  pluralPast: Word('обложились', 5),
  imperativeInformal: Word('обложись', 5),
  imperativeFormal: Word('обложитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обложиться.name.text, обложиться);

export { обложиться };