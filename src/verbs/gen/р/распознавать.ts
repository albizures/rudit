import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распознавать: PerfectVerb = {
  name: Word('распознавать', 9),
  singular1stPerson: Word('распознаю', 8),
  singular2ndPerson: Word('распознаёшь', 1),
  singular3rdPerson: Word('распознаёт', 1),
  plural1stPerson: Word('распознаём', 1),
  plural2ndPerson: Word('распознаёте', 1),
  plural3rdPerson: Word('распознают', 8),
  masculinePast: Word('распознавал', 9),
  femininePast: Word('распознавала', 9),
  neuterPast: Word('распознавало', 9),
  pluralPast: Word('распознавали', 9),
  imperativeInformal: Word('распознавай', 9),
  imperativeFormal: Word('распознавайте', 9),
  imperfect: [],
};

perfectVerbs.set(распознавать.name.text, распознавать);

export { распознавать };