import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const получиться: PerfectVerb = {
  name: Word('получиться', 5),
  singular1stPerson: Word('получусь', 5),
  singular2ndPerson: Word('получишься', 3),
  singular3rdPerson: Word('получится', 3),
  plural1stPerson: Word('получимся', 3),
  plural2ndPerson: Word('получитесь', 3),
  plural3rdPerson: Word('получатся', 3),
  masculinePast: Word('получился', 5),
  femininePast: Word('получилась', 5),
  neuterPast: Word('получилось', 5),
  pluralPast: Word('получились', 5),
  imperativeInformal: Word('получись', 5),
  imperativeFormal: Word('получитесь', 5),
  imperfect: [],
};

perfectVerbs.set(получиться.name.text, получиться);

export { получиться };