import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттолкнуться: PerfectVerb = {
  name: Word('оттолкнуться', 7),
  singular1stPerson: Word('оттолкнусь', 7),
  singular2ndPerson: Word('оттолкнёшься', 7),
  singular3rdPerson: Word('оттолкнётся', 7),
  plural1stPerson: Word('оттолкнёмся', 7),
  plural2ndPerson: Word('оттолкнётесь', 7),
  plural3rdPerson: Word('оттолкнутся', 7),
  masculinePast: Word('оттолкнулся', 7),
  femininePast: Word('оттолкнулась', 7),
  neuterPast: Word('оттолкнулось', 7),
  pluralPast: Word('оттолкнулись', 7),
  imperativeInformal: Word('оттолкнись', 7),
  imperativeFormal: Word('оттолкнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(оттолкнуться.name.text, оттолкнуться);

export { оттолкнуться };