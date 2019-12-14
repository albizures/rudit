import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепробовать: PerfectVerb = {
  name: Word('перепробовать', 6),
  singular1stPerson: Word('перепробую', 6),
  singular2ndPerson: Word('перепробуешь', 6),
  singular3rdPerson: Word('перепробует', 6),
  plural1stPerson: Word('перепробуем', 6),
  plural2ndPerson: Word('перепробуете', 6),
  plural3rdPerson: Word('перепробуют', 6),
  masculinePast: Word('перепробовал', 6),
  femininePast: Word('перепробовала', 6),
  neuterPast: Word('перепробовало', 6),
  pluralPast: Word('перепробовали', 6),
  imperativeInformal: Word('перепробуй', 6),
  imperativeFormal: Word('перепробуйте', 6),
  imperfect: [],
};

perfectVerbs.set(перепробовать.name.text, перепробовать);

export { перепробовать };