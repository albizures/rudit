import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поостеречься: PerfectVerb = {
  name: Word('поостеречься', 7),
  singular1stPerson: Word('поостерегусь', 9),
  singular2ndPerson: Word('поостережёшься', 5),
  singular3rdPerson: Word('поостережётся', 5),
  plural1stPerson: Word('поостережёмся', 5),
  plural2ndPerson: Word('поостережётесь', 5),
  plural3rdPerson: Word('поостерегутся', 9),
  masculinePast: Word('поостерегся', 7),
  femininePast: Word('поостереглась', 10),
  neuterPast: Word('поостереглось', 10),
  pluralPast: Word('поостереглись', 10),
  imperativeInformal: Word('поостерегись', 9),
  imperativeFormal: Word('поостерегитесь', 9),
  imperfect: [],
};

perfectVerbs.set(поостеречься.name.text, поостеречься);

export { поостеречься };