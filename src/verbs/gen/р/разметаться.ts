import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разметаться: PerfectVerb = {
  name: Word('разметаться', 6),
  singular1stPerson: Word('размечусь', 6),
  singular2ndPerson: Word('размечешься', 4),
  singular3rdPerson: Word('размечется', 4),
  plural1stPerson: Word('размечемся', 4),
  plural2ndPerson: Word('размечетесь', 4),
  plural3rdPerson: Word('размечутся', 4),
  masculinePast: Word('разметался', 6),
  femininePast: Word('разметалась', 6),
  neuterPast: Word('разметалось', 6),
  pluralPast: Word('разметались', 6),
  imperativeInformal: Word('размечись', 6),
  imperativeFormal: Word('размечитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разметаться.name.text, разметаться);

export { разметаться };