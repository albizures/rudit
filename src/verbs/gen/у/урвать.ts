import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урвать: PerfectVerb = {
  name: Word('урвать', 3),
  singular1stPerson: Word('урву', 3),
  singular2ndPerson: Word('урвёшь', 0),
  singular3rdPerson: Word('урвёт', 0),
  plural1stPerson: Word('урвём', 0),
  plural2ndPerson: Word('урвёте', 5),
  plural3rdPerson: Word('урвут', 3),
  masculinePast: Word('урвал', 3),
  femininePast: Word('урвала', 5),
  neuterPast: Word('урвало', 3),
  pluralPast: Word('урвали', 3),
  imperativeInformal: Word('урви', 3),
  imperativeFormal: Word('урвите', 3),
  imperfect: [],
};

perfectVerbs.set(урвать.name.text, урвать);

export { урвать };