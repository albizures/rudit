import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разреветься: PerfectVerb = {
  name: Word('разреветься', 6),
  singular1stPerson: Word('разревусь', 6),
  singular2ndPerson: Word('разревёшься', 1),
  singular3rdPerson: Word('разревётся', 1),
  plural1stPerson: Word('разревёмся', 1),
  plural2ndPerson: Word('разревётесь', 1),
  plural3rdPerson: Word('разревутся', 6),
  masculinePast: Word('разревелся', 6),
  femininePast: Word('разревелась', 6),
  neuterPast: Word('разревелось', 6),
  pluralPast: Word('разревелись', 6),
  imperativeInformal: Word('разревись', 6),
  imperativeFormal: Word('разревитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разреветься.name.text, разреветься);

export { разреветься };