import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цвести: PerfectVerb = {
  name: Word('цвести', 5),
  singular1stPerson: Word('цвету', 4),
  singular2ndPerson: Word('цветёшь', 4),
  singular3rdPerson: Word('цветёт', 4),
  plural1stPerson: Word('цветём', 4),
  plural2ndPerson: Word('цветёте', 4),
  plural3rdPerson: Word('цветут', 4),
  masculinePast: Word('цвёл', 2),
  femininePast: Word('цвела', 4),
  neuterPast: Word('цвело', 4),
  pluralPast: Word('цвели', 4),
  imperativeInformal: Word('цвети', 4),
  imperativeFormal: Word('цветите', 4),
  imperfect: [],
};

perfectVerbs.set(цвести.name.text, цвести);

export { цвести };