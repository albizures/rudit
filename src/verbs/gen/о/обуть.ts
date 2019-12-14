import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуть: PerfectVerb = {
  name: Word('обуть', 2),
  singular1stPerson: Word('обую', 2),
  singular2ndPerson: Word('обуешь', 2),
  singular3rdPerson: Word('обует', 2),
  plural1stPerson: Word('обуем', 2),
  plural2ndPerson: Word('обуете', 2),
  plural3rdPerson: Word('обуют', 2),
  masculinePast: Word('обул', 2),
  femininePast: Word('обула', 2),
  neuterPast: Word('обуло', 2),
  pluralPast: Word('обули', 2),
  imperativeInformal: Word('обуй', 2),
  imperativeFormal: Word('обуйте', 2),
  imperfect: [],
};

perfectVerbs.set(обуть.name.text, обуть);

export { обуть };