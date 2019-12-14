import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const народиться: PerfectVerb = {
  name: Word('народиться', 5),
  singular1stPerson: Word('нарожусь', 5),
  singular2ndPerson: Word('народишься', 5),
  singular3rdPerson: Word('народится', 5),
  plural1stPerson: Word('народимся', 5),
  plural2ndPerson: Word('народитесь', 5),
  plural3rdPerson: Word('народятся', 5),
  masculinePast: Word('народился', 5),
  femininePast: Word('народилась', 5),
  neuterPast: Word('народилось', 5),
  pluralPast: Word('народились', 5),
  imperativeInformal: Word('народись', 5),
  imperativeFormal: Word('народитесь', 5),
  imperfect: [],
};

perfectVerbs.set(народиться.name.text, народиться);

export { народиться };