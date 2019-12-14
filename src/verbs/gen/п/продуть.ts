import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продуть: PerfectVerb = {
  name: Word('продуть', 4),
  singular1stPerson: Word('продую', 4),
  singular2ndPerson: Word('продуешь', 4),
  singular3rdPerson: Word('продует', 4),
  plural1stPerson: Word('продуем', 4),
  plural2ndPerson: Word('продуете', 4),
  plural3rdPerson: Word('продуют', 4),
  masculinePast: Word('продул', 4),
  femininePast: Word('продула', 4),
  neuterPast: Word('продуло', 4),
  pluralPast: Word('продули', 4),
  imperativeInformal: Word('продуй', 4),
  imperativeFormal: Word('продуйте', 4),
  imperfect: [],
};

perfectVerbs.set(продуть.name.text, продуть);

export { продуть };