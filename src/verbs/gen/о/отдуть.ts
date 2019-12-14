import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдуть: PerfectVerb = {
  name: Word('отдуть', 3),
  singular1stPerson: Word('отдую', 3),
  singular2ndPerson: Word('отдуешь', 3),
  singular3rdPerson: Word('отдует', 3),
  plural1stPerson: Word('отдуем', 3),
  plural2ndPerson: Word('отдуете', 3),
  plural3rdPerson: Word('отдуют', 3),
  masculinePast: Word('отдул', 3),
  femininePast: Word('отдула', 3),
  neuterPast: Word('отдуло', 3),
  pluralPast: Word('отдули', 3),
  imperativeInformal: Word('отдуй', 3),
  imperativeFormal: Word('отдуйте', 3),
  imperfect: [],
};

perfectVerbs.set(отдуть.name.text, отдуть);

export { отдуть };