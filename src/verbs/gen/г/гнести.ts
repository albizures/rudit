import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнести: PerfectVerb = {
  name: Word('гнести', 5),
  singular1stPerson: Word('гнету', 4),
  singular2ndPerson: Word('гнетёшь', 2),
  singular3rdPerson: Word('гнетёт', 2),
  plural1stPerson: Word('гнетём', 2),
  plural2ndPerson: Word('гнетёте', 2),
  plural3rdPerson: Word('гнетут', 4),
  masculinePast: Word('гнёл', 2),
  femininePast: Word('гнела', 4),
  neuterPast: Word('гнело', 4),
  pluralPast: Word('гнели', 4),
  imperativeInformal: Word('гнети', 4),
  imperativeFormal: Word('гнетите', 4),
  imperfect: [],
};

perfectVerbs.set(гнести.name.text, гнести);

export { гнести };