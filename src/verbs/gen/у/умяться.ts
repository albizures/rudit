import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умяться: PerfectVerb = {
  name: Word('умяться', 2),
  singular1stPerson: Word('умнусь', 3),
  singular2ndPerson: Word('умнёшься', 3),
  singular3rdPerson: Word('умнётся', 3),
  plural1stPerson: Word('умнёмся', 3),
  plural2ndPerson: Word('умнётесь', 3),
  plural3rdPerson: Word('умнутся', 3),
  masculinePast: Word('умялся', 2),
  femininePast: Word('умялась', 2),
  neuterPast: Word('умялось', 2),
  pluralPast: Word('умялись', 2),
  imperativeInformal: Word('умнись', 3),
  imperativeFormal: Word('умнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(умяться.name.text, умяться);

export { умяться };