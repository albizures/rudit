import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уснащать: PerfectVerb = {
  name: Word('уснащать', 5),
  singular1stPerson: Word('уснащаю', 5),
  singular2ndPerson: Word('уснащаешь', 5),
  singular3rdPerson: Word('уснащает', 5),
  plural1stPerson: Word('уснащаем', 5),
  plural2ndPerson: Word('уснащаете', 5),
  plural3rdPerson: Word('уснащают', 5),
  masculinePast: Word('уснащал', 5),
  femininePast: Word('уснащала', 5),
  neuterPast: Word('уснащало', 5),
  pluralPast: Word('уснащали', 5),
  imperativeInformal: Word('уснащай', 5),
  imperativeFormal: Word('уснащайте', 5),
  imperfect: [],
};

perfectVerbs.set(уснащать.name.text, уснащать);

export { уснащать };