import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распугать: PerfectVerb = {
  name: Word('распугать', 6),
  singular1stPerson: Word('распугаю', 6),
  singular2ndPerson: Word('распугаешь', 6),
  singular3rdPerson: Word('распугает', 6),
  plural1stPerson: Word('распугаем', 6),
  plural2ndPerson: Word('распугаете', 6),
  plural3rdPerson: Word('распугают', 6),
  masculinePast: Word('распугал', 6),
  femininePast: Word('распугала', 6),
  neuterPast: Word('распугало', 6),
  pluralPast: Word('распугали', 6),
  imperativeInformal: Word('распугай', 6),
  imperativeFormal: Word('распугайте', 6),
  imperfect: [],
};

perfectVerbs.set(распугать.name.text, распугать);

export { распугать };