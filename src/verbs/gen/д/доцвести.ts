import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доцвести: PerfectVerb = {
  name: Word('доцвести', 7),
  singular1stPerson: Word('доцвету', 6),
  singular2ndPerson: Word('доцветёшь', 6),
  singular3rdPerson: Word('доцветёт', 6),
  plural1stPerson: Word('доцветём', 6),
  plural2ndPerson: Word('доцветёте', 6),
  plural3rdPerson: Word('доцветут', 6),
  masculinePast: Word('доцвёл', 4),
  femininePast: Word('доцвела', 6),
  neuterPast: Word('доцвело', 6),
  pluralPast: Word('доцвели', 6),
  imperativeInformal: Word('доцвети', 6),
  imperativeFormal: Word('доцветите', 6),
  imperfect: [],
};

perfectVerbs.set(доцвести.name.text, доцвести);

export { доцвести };