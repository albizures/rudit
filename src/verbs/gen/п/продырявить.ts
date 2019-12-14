import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продырявить: PerfectVerb = {
  name: Word('продырявить', 6),
  singular1stPerson: Word('продырявлю', 6),
  singular2ndPerson: Word('продырявишь', 6),
  singular3rdPerson: Word('продырявит', 6),
  plural1stPerson: Word('продырявим', 6),
  plural2ndPerson: Word('продырявите', 6),
  plural3rdPerson: Word('продырявят', 6),
  masculinePast: Word('продырявил', 6),
  femininePast: Word('продырявила', 6),
  neuterPast: Word('продырявило', 6),
  pluralPast: Word('продырявили', 6),
  imperativeInformal: Word('продырявь', 6),
  imperativeFormal: Word('продырявьте', 6),
  imperfect: [],
};

perfectVerbs.set(продырявить.name.text, продырявить);

export { продырявить };