import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добрать: PerfectVerb = {
  name: Word('добрать', 4),
  singular1stPerson: Word('доберу', 5),
  singular2ndPerson: Word('доберёшь', 5),
  singular3rdPerson: Word('доберёт', 5),
  plural1stPerson: Word('доберём', 5),
  plural2ndPerson: Word('доберёте', 5),
  plural3rdPerson: Word('доберут', 5),
  masculinePast: Word('добрал', 4),
  femininePast: Word('добрала', 6),
  neuterPast: Word('добрало', 4),
  pluralPast: Word('добрали', 4),
  imperativeInformal: Word('добери', 5),
  imperativeFormal: Word('доберите', 5),
  imperfect: [],
};

perfectVerbs.set(добрать.name.text, добрать);

export { добрать };