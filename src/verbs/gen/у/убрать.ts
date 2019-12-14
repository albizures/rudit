import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убрать: PerfectVerb = {
  name: Word('убрать', 3),
  singular1stPerson: Word('уберу', 4),
  singular2ndPerson: Word('уберёшь', 2),
  singular3rdPerson: Word('уберёт', 2),
  plural1stPerson: Word('уберём', 2),
  plural2ndPerson: Word('уберёте', 2),
  plural3rdPerson: Word('уберут', 4),
  masculinePast: Word('убрал', 3),
  femininePast: Word('убрала', 5),
  neuterPast: Word('убрало', 3),
  pluralPast: Word('убрали', 3),
  imperativeInformal: Word('убери', 4),
  imperativeFormal: Word('уберите', 4),
  imperfect: ['убирать'],
};

perfectVerbs.set(убрать.name.text, убрать);

export { убрать };