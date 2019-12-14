import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const носиться: PerfectVerb = {
  name: Word('носиться', 3),
  singular1stPerson: Word('ношусь', 3),
  singular2ndPerson: Word('носишься', 1),
  singular3rdPerson: Word('носится', 1),
  plural1stPerson: Word('носимся', 1),
  plural2ndPerson: Word('носитесь', 1),
  plural3rdPerson: Word('носятся', 1),
  masculinePast: Word('носился', 3),
  femininePast: Word('носилась', 3),
  neuterPast: Word('носилось', 3),
  pluralPast: Word('носились', 3),
  imperativeInformal: Word('носись', 3),
  imperativeFormal: Word('носитесь', 3),
  imperfect: [],
};

perfectVerbs.set(носиться.name.text, носиться);

export { носиться };