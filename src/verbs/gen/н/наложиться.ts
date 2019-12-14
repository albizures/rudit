import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наложиться: PerfectVerb = {
  name: Word('наложиться', 5),
  singular1stPerson: Word('наложусь', 5),
  singular2ndPerson: Word('наложишься', 3),
  singular3rdPerson: Word('наложится', 3),
  plural1stPerson: Word('наложимся', 3),
  plural2ndPerson: Word('наложитесь', 3),
  plural3rdPerson: Word('наложатся', 3),
  masculinePast: Word('наложился', 5),
  femininePast: Word('наложилась', 5),
  neuterPast: Word('наложилось', 5),
  pluralPast: Word('наложились', 5),
  imperativeInformal: Word('наложись', 5),
  imperativeFormal: Word('наложитесь', 5),
  imperfect: [],
};

perfectVerbs.set(наложиться.name.text, наложиться);

export { наложиться };