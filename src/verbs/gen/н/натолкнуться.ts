import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натолкнуться: PerfectVerb = {
  name: Word('натолкнуться', 7),
  singular1stPerson: Word('натолкнусь', 7),
  singular2ndPerson: Word('натолкнёшься', 7),
  singular3rdPerson: Word('натолкнётся', 7),
  plural1stPerson: Word('натолкнёмся', 7),
  plural2ndPerson: Word('натолкнётесь', 7),
  plural3rdPerson: Word('натолкнутся', 7),
  masculinePast: Word('натолкнулся', 7),
  femininePast: Word('натолкнулась', 7),
  neuterPast: Word('натолкнулось', 7),
  pluralPast: Word('натолкнулись', 7),
  imperativeInformal: Word('натолкнись', 7),
  imperativeFormal: Word('натолкнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(натолкнуться.name.text, натолкнуться);

export { натолкнуться };