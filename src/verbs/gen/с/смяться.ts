import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смяться: PerfectVerb = {
  name: Word('смяться', 2),
  singular1stPerson: Word('сомнусь', 4),
  singular2ndPerson: Word('сомнёшься', 1),
  singular3rdPerson: Word('сомнётся', 1),
  plural1stPerson: Word('сомнёмся', 1),
  plural2ndPerson: Word('сомнётесь', 6),
  plural3rdPerson: Word('сомнутся', 4),
  masculinePast: Word('смялся', 2),
  femininePast: Word('смялась', 2),
  neuterPast: Word('смялось', 2),
  pluralPast: Word('смялись', 2),
  imperativeInformal: Word('сомнись', 4),
  imperativeFormal: Word('сомнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(смяться.name.text, смяться);

export { смяться };