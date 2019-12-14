import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробрать: PerfectVerb = {
  name: Word('пробрать', 5),
  singular1stPerson: Word('проберу', 6),
  singular2ndPerson: Word('проберёшь', 4),
  singular3rdPerson: Word('проберёт', 4),
  plural1stPerson: Word('проберём', 4),
  plural2ndPerson: Word('проберёте', 4),
  plural3rdPerson: Word('проберут', 6),
  masculinePast: Word('пробрал', 5),
  femininePast: Word('пробрала', 7),
  neuterPast: Word('пробрало', 5),
  pluralPast: Word('пробрали', 5),
  imperativeInformal: Word('пробери', 6),
  imperativeFormal: Word('проберите', 6),
  imperfect: [],
};

perfectVerbs.set(пробрать.name.text, пробрать);

export { пробрать };