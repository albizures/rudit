import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцвести: PerfectVerb = {
  name: Word('отцвести', 7),
  singular1stPerson: Word('отцвету', 6),
  singular2ndPerson: Word('отцветёшь', 6),
  singular3rdPerson: Word('отцветёт', 6),
  plural1stPerson: Word('отцветём', 6),
  plural2ndPerson: Word('отцветёте', 6),
  plural3rdPerson: Word('отцветут', 6),
  masculinePast: Word('отцвёл', 4),
  femininePast: Word('отцвела', 6),
  neuterPast: Word('отцвело', 6),
  pluralPast: Word('отцвели', 6),
  imperativeInformal: Word('отцвети', 6),
  imperativeFormal: Word('отцветите', 6),
  imperfect: [],
};

perfectVerbs.set(отцвести.name.text, отцвести);

export { отцвести };