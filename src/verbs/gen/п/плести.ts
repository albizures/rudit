import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плести: PerfectVerb = {
  name: Word('плести', 5),
  singular1stPerson: Word('плету', 4),
  singular2ndPerson: Word('плетёшь', 2),
  singular3rdPerson: Word('плетёт', 2),
  plural1stPerson: Word('плетём', 2),
  plural2ndPerson: Word('плетёте', 2),
  plural3rdPerson: Word('плетут', 4),
  masculinePast: Word('плёл', 2),
  femininePast: Word('плела', 4),
  neuterPast: Word('плело', 4),
  pluralPast: Word('плели', 4),
  imperativeInformal: Word('плети', 4),
  imperativeFormal: Word('плетите', 4),
  imperfect: ['сплести','заплести'],
};

perfectVerbs.set(плести.name.text, плести);

export { плести };