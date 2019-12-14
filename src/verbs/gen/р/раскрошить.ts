import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрошить: PerfectVerb = {
  name: Word('раскрошить', 7),
  singular1stPerson: Word('раскрошу', 7),
  singular2ndPerson: Word('раскрошишь', 5),
  singular3rdPerson: Word('раскрошит', 5),
  plural1stPerson: Word('раскрошим', 5),
  plural2ndPerson: Word('раскрошите', 5),
  plural3rdPerson: Word('раскрошат', 5),
  masculinePast: Word('раскрошил', 7),
  femininePast: Word('раскрошила', 7),
  neuterPast: Word('раскрошило', 7),
  pluralPast: Word('раскрошили', 7),
  imperativeInformal: Word('раскроши', 7),
  imperativeFormal: Word('раскрошите', 7),
  imperfect: [],
};

perfectVerbs.set(раскрошить.name.text, раскрошить);

export { раскрошить };