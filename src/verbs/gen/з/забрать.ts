import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забрать: PerfectVerb = {
  name: Word('забрать', 4),
  singular1stPerson: Word('заберу', 5),
  singular2ndPerson: Word('заберёшь', 1),
  singular3rdPerson: Word('заберёт', 1),
  plural1stPerson: Word('заберём', 1),
  plural2ndPerson: Word('заберёте', 1),
  plural3rdPerson: Word('заберут', 5),
  masculinePast: Word('забрал', 4),
  femininePast: Word('забрала', 6),
  neuterPast: Word('забрало', 4),
  pluralPast: Word('забрали', 4),
  imperativeInformal: Word('забери', 5),
  imperativeFormal: Word('заберите', 5),
  imperfect: ['забирать'],
};

perfectVerbs.set(забрать.name.text, забрать);

export { забрать };