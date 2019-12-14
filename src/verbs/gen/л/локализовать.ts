import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const локализовать: PerfectVerb = {
  name: Word('локализовать', 9),
  singular1stPerson: Word('локализую', 7),
  singular2ndPerson: Word('локализуешь', 7),
  singular3rdPerson: Word('локализует', 7),
  plural1stPerson: Word('локализуем', 7),
  plural2ndPerson: Word('локализуете', 7),
  plural3rdPerson: Word('локализуют', 7),
  masculinePast: Word('локализовал', 9),
  femininePast: Word('локализовала', 9),
  neuterPast: Word('локализовало', 9),
  pluralPast: Word('локализовали', 9),
  imperativeInformal: Word('локализуй', 7),
  imperativeFormal: Word('локализуйте', 7),
  imperfect: [],
};

perfectVerbs.set(локализовать.name.text, локализовать);

export { локализовать };