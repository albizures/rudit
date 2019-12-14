import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выявить: PerfectVerb = {
  name: Word('выявить', 1),
  singular1stPerson: Word('выявлю', 1),
  singular2ndPerson: Word('выявишь', 1),
  singular3rdPerson: Word('выявит', 1),
  plural1stPerson: Word('выявим', 1),
  plural2ndPerson: Word('выявите', 1),
  plural3rdPerson: Word('выявят', 1),
  masculinePast: Word('выявил', 1),
  femininePast: Word('выявила', 1),
  neuterPast: Word('выявило', 1),
  pluralPast: Word('выявили', 1),
  imperativeInformal: Word('выявь', 1),
  imperativeFormal: Word('выявьте', 1),
  imperfect: ['выявлять'],
};

perfectVerbs.set(выявить.name.text, выявить);

export { выявить };