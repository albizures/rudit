import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдуть: PerfectVerb = {
  name: Word('сдуть', 2),
  singular1stPerson: Word('сдую', 2),
  singular2ndPerson: Word('сдуешь', 2),
  singular3rdPerson: Word('сдует', 2),
  plural1stPerson: Word('сдуем', 2),
  plural2ndPerson: Word('сдуете', 2),
  plural3rdPerson: Word('сдуют', 2),
  masculinePast: Word('сдул', 2),
  femininePast: Word('сдула', 2),
  neuterPast: Word('сдуло', 2),
  pluralPast: Word('сдули', 2),
  imperativeInformal: Word('сдуй', 2),
  imperativeFormal: Word('сдуйте', 2),
  imperfect: [],
};

perfectVerbs.set(сдуть.name.text, сдуть);

export { сдуть };