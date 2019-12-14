import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплести: PerfectVerb = {
  name: Word('наплести', 7),
  singular1stPerson: Word('наплету', 6),
  singular2ndPerson: Word('наплетёшь', 1),
  singular3rdPerson: Word('наплетёт', 1),
  plural1stPerson: Word('наплетём', 1),
  plural2ndPerson: Word('наплетёте', 1),
  plural3rdPerson: Word('наплетут', 6),
  masculinePast: Word('наплёл', 1),
  femininePast: Word('наплела', 6),
  neuterPast: Word('наплело', 6),
  pluralPast: Word('наплели', 6),
  imperativeInformal: Word('наплети', 6),
  imperativeFormal: Word('наплетите', 6),
  imperfect: [],
};

perfectVerbs.set(наплести.name.text, наплести);

export { наплести };