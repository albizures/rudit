import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протолкнуться: PerfectVerb = {
  name: Word('протолкнуться', 8),
  singular1stPerson: Word('протолкнусь', 8),
  singular2ndPerson: Word('протолкнёшься', 8),
  singular3rdPerson: Word('протолкнётся', 8),
  plural1stPerson: Word('протолкнёмся', 8),
  plural2ndPerson: Word('протолкнётесь', 8),
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