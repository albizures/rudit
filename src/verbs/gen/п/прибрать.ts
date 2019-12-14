import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибрать: PerfectVerb = {
  name: Word('прибрать', 5),
  singular1stPerson: Word('приберу', 6),
  singular2ndPerson: Word('приберёшь', 4),
  singular3rdPerson: Word('приберёт', 4),
  plural1stPerson: Word('приберём', 4),
  plural2ndPerson: Word('приберёте', 4),
  plural3rdPerson: Word('приберут', 6),
  masculinePast: Word('прибрал', 5),
  femininePast: Word('прибрала', 7),
  neuterPast: Word('прибрало', 5),
  pluralPast: Word('прибрали', 5),
  imperativeInformal: Word('прибери', 6),
  imperativeFormal: Word('приберите', 6),
  imperfect: [],
};

perfectVerbs.set(прибрать.name.text, прибрать);

export { прибрать };