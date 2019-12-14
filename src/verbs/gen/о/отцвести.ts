import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцвести: PerfectVerb = {
  name: Word('отцвести', 7),
  singular1stPerson: Word('отцвету', 6),
  singular2ndPerson: Word('отцветёшь', 4),
  singular3rdPerson: Word('отцветёт', 4),
  plural1stPerson: Word('отцветём', 4),
  plural2ndPerson: Word('отцветёте', 4),
  plural3rdPerson: Word('отцветут', 6),
  masculinePast: Word('отцвёл', 0),
  femininePast: Word('отцвела', 6),
  neuterPast: Word('отцвело', 6),
  pluralPast: Word('отцвели', 6),
  imperativeInformal: Word('отцвети', 6),
  imperativeFormal: Word('отцветите', 6),
  imperfect: [],
};

perfectVerbs.set(отцвести.name.text, отцвести);

export { отцвести };