import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протолкнуться: PerfectVerb = {
  name: Word('протолкнуться', 8),
  singular1stPerson: Word('протолкнусь', 8),
  singular2ndPerson: Word('протолкнёшься', 2),
  singular3rdPerson: Word('протолкнётся', 2),
  plural1stPerson: Word('протолкнёмся', 2),
  plural2ndPerson: Word('протолкнётесь', 10),
  plural3rdPerson: Word('протолкнутся', 8),
  masculinePast: Word('протолкнулся', 8),
  femininePast: Word('протолкнулась', 8),
  neuterPast: Word('протолкнулось', 8),
  pluralPast: Word('протолкнулись', 8),
  imperativeInformal: Word('протолкнись', 8),
  imperativeFormal: Word('протолкнитесь', 8),
  imperfect: [],
};

perfectVerbs.set(протолкнуться.name.text, протолкнуться);

export { протолкнуться };