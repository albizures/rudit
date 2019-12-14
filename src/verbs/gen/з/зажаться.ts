import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажаться: PerfectVerb = {
  name: Word('зажаться', 3),
  singular1stPerson: Word('зажмусь', 4),
  singular2ndPerson: Word('зажмёшься', 1),
  singular3rdPerson: Word('зажмётся', 1),
  plural1stPerson: Word('зажмёмся', 1),
  plural2ndPerson: Word('зажмётесь', 1),
  plural3rdPerson: Word('зажмутся', 4),
  masculinePast: Word('зажался', 3),
  femininePast: Word('зажалась', 3),
  neuterPast: Word('зажалось', 3),
  pluralPast: Word('зажались', 3),
  imperativeInformal: Word('зажмись', 4),
  imperativeFormal: Word('зажмитесь', 4),
  imperfect: [],
};

perfectVerbs.set(зажаться.name.text, зажаться);

export { зажаться };