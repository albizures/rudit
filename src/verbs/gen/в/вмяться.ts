import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмяться: PerfectVerb = {
  name: Word('вмяться', 2),
  singular1stPerson: Word('вомнусь', 4),
  singular2ndPerson: Word('вомнёшься', 4),
  singular3rdPerson: Word('вомнётся', 4),
  plural1stPerson: Word('вомнёмся', 4),
  plural2ndPerson: Word('вомнётесь', 4),
  plural3rdPerson: Word('вомнутся', 4),
  masculinePast: Word('вмялся', 2),
  femininePast: Word('вмялась', 2),
  neuterPast: Word('вмялось', 2),
  pluralPast: Word('вмялись', 2),
  imperativeInformal: Word('вомнись', 4),
  imperativeFormal: Word('вомнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вмяться.name.text, вмяться);

export { вмяться };