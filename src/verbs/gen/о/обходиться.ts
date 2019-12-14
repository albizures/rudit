import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обходиться: PerfectVerb = {
  name: Word('обходиться', 5),
  singular1stPerson: Word('обхожусь', 5),
  singular2ndPerson: Word('обходишься', 3),
  singular3rdPerson: Word('обходится', 3),
  plural1stPerson: Word('обходимся', 3),
  plural2ndPerson: Word('обходитесь', 3),
  plural3rdPerson: Word('обходятся', 3),
  masculinePast: Word('обходился', 5),
  femininePast: Word('обходилась', 5),
  neuterPast: Word('обходилось', 5),
  pluralPast: Word('обходились', 5),
  imperativeInformal: Word('обходись', 5),
  imperativeFormal: Word('обходитесь', 5),
  imperfect: ['обойтись'],
};

perfectVerbs.set(обходиться.name.text, обходиться);

export { обходиться };