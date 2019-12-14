import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размяться: PerfectVerb = {
  name: Word('размяться', 4),
  singular1stPerson: Word('разомнусь', 6),
  singular2ndPerson: Word('разомнёшься', 6),
  singular3rdPerson: Word('разомнётся', 6),
  plural1stPerson: Word('разомнёмся', 6),
  plural2ndPerson: Word('разомнётесь', 6),
  plural3rdPerson: Word('разомнутся', 6),
  masculinePast: Word('размялся', 4),
  femininePast: Word('размялась', 4),
  neuterPast: Word('размялось', 4),
  pluralPast: Word('размялись', 4),
  imperativeInformal: Word('разомнись', 6),
  imperativeFormal: Word('разомнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(размяться.name.text, размяться);

export { размяться };