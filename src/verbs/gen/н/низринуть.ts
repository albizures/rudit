import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низринуть: PerfectVerb = {
  name: Word('низринуть', 4),
  singular1stPerson: Word('низрину', 4),
  singular2ndPerson: Word('низринешь', 4),
  singular3rdPerson: Word('низринет', 4),
  plural1stPerson: Word('низринем', 4),
  plural2ndPerson: Word('низринете', 4),
  plural3rdPerson: Word('низринут', 4),
  masculinePast: Word('низринул', 4),
  femininePast: Word('низринула', 4),
  neuterPast: Word('низринуло', 4),
  pluralPast: Word('низринули', 4),
  imperativeInformal: Word('низринь', 4),
  imperativeFormal: Word('низриньте', 4),
  imperfect: [],
};

perfectVerbs.set(низринуть.name.text, низринуть);

export { низринуть };