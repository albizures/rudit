import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплести: PerfectVerb = {
  name: Word('приплести', 8),
  singular1stPerson: Word('приплету', 7),
  singular2ndPerson: Word('приплетёшь', 5),
  singular3rdPerson: Word('приплетёт', 5),
  plural1stPerson: Word('приплетём', 5),
  plural2ndPerson: Word('приплетёте', 5),
  plural3rdPerson: Word('приплетут', 7),
  masculinePast: Word('приплёл', 2),
  femininePast: Word('приплела', 7),
  neuterPast: Word('приплело', 7),
  pluralPast: Word('приплели', 7),
  imperativeInformal: Word('приплети', 7),
  imperativeFormal: Word('приплетите', 7),
  imperfect: [],
};

perfectVerbs.set(приплести.name.text, приплести);

export { приплести };