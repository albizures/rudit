import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приложиться: PerfectVerb = {
  name: Word('приложиться', 6),
  singular1stPerson: Word('приложусь', 6),
  singular2ndPerson: Word('приложишься', 4),
  singular3rdPerson: Word('приложится', 4),
  plural1stPerson: Word('приложимся', 4),
  plural2ndPerson: Word('приложитесь', 4),
  plural3rdPerson: Word('приложатся', 4),
  masculinePast: Word('приложился', 6),
  femininePast: Word('приложилась', 6),
  neuterPast: Word('приложилось', 6),
  pluralPast: Word('приложились', 6),
  imperativeInformal: Word('приложись', 6),
  imperativeFormal: Word('приложитесь', 6),
  imperfect: [],
};

perfectVerbs.set(приложиться.name.text, приложиться);

export { приложиться };