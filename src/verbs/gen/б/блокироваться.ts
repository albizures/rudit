import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блокироваться: PerfectVerb = {
  name: Word('блокироваться', 4),
  singular1stPerson: Word('блокируюсь', 4),
  singular2ndPerson: Word('блокируешься', 4),
  singular3rdPerson: Word('блокируется', 4),
  plural1stPerson: Word('блокируемся', 4),
  plural2ndPerson: Word('блокируетесь', 4),
  plural3rdPerson: Word('блокируются', 4),
  masculinePast: Word('блокировался', 4),
  femininePast: Word('блокировалась', 4),
  neuterPast: Word('блокировалось', 4),
  pluralPast: Word('блокировались', 4),
  imperativeInformal: Word('блокируйся', 4),
  imperativeFormal: Word('блокируйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(блокироваться.name.text, блокироваться);

export { блокироваться };