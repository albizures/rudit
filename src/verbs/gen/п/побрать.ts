import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побрать: PerfectVerb = {
  name: Word('побрать', 4),
  singular1stPerson: Word('поберу', 5),
  singular2ndPerson: Word('поберёшь', 3),
  singular3rdPerson: Word('поберёт', 3),
  plural1stPerson: Word('поберём', 3),
  plural2ndPerson: Word('поберёте', 3),
  plural3rdPerson: Word('поберут', 5),
  masculinePast: Word('побрал', 4),
  femininePast: Word('побрала', 6),
  neuterPast: Word('побрало', 4),
  pluralPast: Word('побрали', 4),
  imperativeInformal: Word('побери', 5),
  imperativeFormal: Word('поберите', 5),
  imperfect: [],
};

perfectVerbs.set(побрать.name.text, побрать);

export { побрать };