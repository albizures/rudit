import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вобрать: PerfectVerb = {
  name: Word('вобрать', 4),
  singular1stPerson: Word('вберу', 4),
  singular2ndPerson: Word('вберёшь', 4),
  singular3rdPerson: Word('вберёт', 4),
  plural1stPerson: Word('вберём', 4),
  plural2ndPerson: Word('вберёте', 4),
  plural3rdPerson: Word('вберут', 4),
  masculinePast: Word('вобрал', 4),
  femininePast: Word('вобрала', 4),
  neuterPast: Word('вобрало', 4),
  pluralPast: Word('вобрали', 4),
  imperativeInformal: Word('вбери', 4),
  imperativeFormal: Word('вберите', 4),
  imperfect: ['вбирать'],
};

perfectVerbs.set(вобрать.name.text, вобрать);

export { вобрать };