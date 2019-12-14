import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увеличиться: PerfectVerb = {
  name: Word('увеличиться', 4),
  singular1stPerson: Word('увеличусь', 4),
  singular2ndPerson: Word('увеличишься', 4),
  singular3rdPerson: Word('увеличится', 4),
  plural1stPerson: Word('увеличимся', 4),
  plural2ndPerson: Word('увеличитесь', 4),
  plural3rdPerson: Word('увеличатся', 4),
  masculinePast: Word('увеличился', 4),
  femininePast: Word('увеличилась', 4),
  neuterPast: Word('увеличилось', 4),
  pluralPast: Word('увеличились', 4),
  imperativeInformal: Word('увеличься', 4),
  imperativeFormal: Word('увеличьтесь', 4),
  imperfect: ['увеличиваться'],
};

perfectVerbs.set(увеличиться.name.text, увеличиться);

export { увеличиться };