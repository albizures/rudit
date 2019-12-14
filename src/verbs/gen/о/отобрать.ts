import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отобрать: PerfectVerb = {
  name: Word('отобрать', 5),
  singular1stPerson: Word('отберу', 5),
  singular2ndPerson: Word('отберёшь', 3),
  singular3rdPerson: Word('отберёт', 3),
  plural1stPerson: Word('отберём', 3),
  plural2ndPerson: Word('отберёте', 3),
  plural3rdPerson: Word('отберут', 5),
  masculinePast: Word('отобрал', 5),
  femininePast: Word('отобрала', 7),
  neuterPast: Word('отобрало', 5),
  pluralPast: Word('отобрали', 5),
  imperativeInformal: Word('отбери', 5),
  imperativeFormal: Word('отберите', 5),
  imperfect: [],
};

perfectVerbs.set(отобрать.name.text, отобрать);

export { отобрать };