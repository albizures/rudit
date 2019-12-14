import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подобрать: PerfectVerb = {
  name: Word('подобрать', 6),
  singular1stPerson: Word('подберу', 6),
  singular2ndPerson: Word('подберёшь', 4),
  singular3rdPerson: Word('подберёт', 4),
  plural1stPerson: Word('подберём', 4),
  plural2ndPerson: Word('подберёте', 4),
  plural3rdPerson: Word('подберут', 6),
  masculinePast: Word('подобрал', 6),
  femininePast: Word('подобрала', 8),
  neuterPast: Word('подобрало', 6),
  pluralPast: Word('подобрали', 6),
  imperativeInformal: Word('подбери', 6),
  imperativeFormal: Word('подберите', 6),
  imperfect: [],
};

perfectVerbs.set(подобрать.name.text, подобрать);

export { подобрать };