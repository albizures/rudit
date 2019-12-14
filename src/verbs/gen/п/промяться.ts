import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промяться: PerfectVerb = {
  name: Word('промяться', 4),
  singular1stPerson: Word('промнусь', 5),
  singular2ndPerson: Word('промнёшься', 2),
  singular3rdPerson: Word('промнётся', 2),
  plural1stPerson: Word('промнёмся', 2),
  plural2ndPerson: Word('промнётесь', 7),
  plural3rdPerson: Word('промнутся', 5),
  masculinePast: Word('промялся', 4),
  femininePast: Word('промялась', 4),
  neuterPast: Word('промялось', 4),
  pluralPast: Word('промялись', 4),
  imperativeInformal: Word('промнись', 5),
  imperativeFormal: Word('промнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(промяться.name.text, промяться);

export { промяться };