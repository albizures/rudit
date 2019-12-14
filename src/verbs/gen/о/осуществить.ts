import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осуществить: PerfectVerb = {
  name: Word('осуществить', 8),
  singular1stPerson: Word('осуществлю', 9),
  singular2ndPerson: Word('осуществишь', 8),
  singular3rdPerson: Word('осуществит', 8),
  plural1stPerson: Word('осуществим', 8),
  plural2ndPerson: Word('осуществите', 8),
  plural3rdPerson: Word('осуществят', 8),
  masculinePast: Word('осуществил', 8),
  femininePast: Word('осуществила', 8),
  neuterPast: Word('осуществило', 8),
  pluralPast: Word('осуществили', 8),
  imperativeInformal: Word('осуществи', 8),
  imperativeFormal: Word('осуществите', 8),
  imperfect: ['осуществлять'],
};

perfectVerbs.set(осуществить.name.text, осуществить);

export { осуществить };