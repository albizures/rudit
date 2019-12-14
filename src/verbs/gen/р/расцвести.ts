import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцвести: PerfectVerb = {
  name: Word('расцвести', 8),
  singular1stPerson: Word('расцвету', 7),
  singular2ndPerson: Word('расцветёшь', 7),
  singular3rdPerson: Word('расцветёт', 7),
  plural1stPerson: Word('расцветём', 7),
  plural2ndPerson: Word('расцветёте', 7),
  plural3rdPerson: Word('расцветут', 7),
  masculinePast: Word('расцвёл', 5),
  femininePast: Word('расцвела', 7),
  neuterPast: Word('расцвело', 7),
  pluralPast: Word('расцвели', 7),
  imperativeInformal: Word('расцвети', 7),
  imperativeFormal: Word('расцветите', 7),
  imperfect: [],
};

perfectVerbs.set(расцвести.name.text, расцвести);

export { расцвести };