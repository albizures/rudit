import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацвести: PerfectVerb = {
  name: Word('зацвести', 7),
  singular1stPerson: Word('зацвету', 6),
  singular2ndPerson: Word('зацветёшь', 6),
  singular3rdPerson: Word('зацветёт', 6),
  plural1stPerson: Word('зацветём', 6),
  plural2ndPerson: Word('зацветёте', 6),
  plural3rdPerson: Word('зацветут', 6),
  masculinePast: Word('зацвёл', 4),
  femininePast: Word('зацвела', 6),
  neuterPast: Word('зацвело', 6),
  pluralPast: Word('зацвели', 6),
  imperativeInformal: Word('зацвети', 6),
  imperativeFormal: Word('зацветите', 6),
  imperfect: [],
};

perfectVerbs.set(зацвести.name.text, зацвести);

export { зацвести };