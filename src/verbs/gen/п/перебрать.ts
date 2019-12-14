import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебрать: PerfectVerb = {
  name: Word('перебрать', 6),
  singular1stPerson: Word('переберу', 7),
  singular2ndPerson: Word('переберёшь', 7),
  singular3rdPerson: Word('переберёт', 7),
  plural1stPerson: Word('переберём', 7),
  plural2ndPerson: Word('переберёте', 7),
  plural3rdPerson: Word('переберут', 7),
  masculinePast: Word('перебрал', 6),
  femininePast: Word('перебрала', 8),
  neuterPast: Word('перебрало', 6),
  pluralPast: Word('перебрали', 6),
  imperativeInformal: Word('перебери', 7),
  imperativeFormal: Word('переберите', 7),
  imperfect: [],
};

perfectVerbs.set(перебрать.name.text, перебрать);

export { перебрать };