import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брезжиться: PerfectVerb = {
  name: Word('брезжиться', 2),
  singular1stPerson: Word('брезжусь', 2),
  singular2ndPerson: Word('брезжишься', 2),
  singular3rdPerson: Word('брезжится', 2),
  plural1stPerson: Word('брезжимся', 2),
  plural2ndPerson: Word('брезжитесь', 2),
  plural3rdPerson: Word('брезжатся', 2),
  masculinePast: Word('брезжился', 2),
  femininePast: Word('брезжилась', 2),
  neuterPast: Word('брезжилось', 2),
  pluralPast: Word('брезжились', 2),
  imperativeInformal: Word('брезжись', 2),
  imperativeFormal: Word('брезжитесь', 2),
  imperfect: [],
};

perfectVerbs.set(брезжиться.name.text, брезжиться);

export { брезжиться };