import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const парализовать: PerfectVerb = {
  name: Word('парализовать', 9),
  singular1stPerson: Word('парализую', 7),
  singular2ndPerson: Word('парализуешь', 7),
  singular3rdPerson: Word('парализует', 7),
  plural1stPerson: Word('парализуем', 7),
  plural2ndPerson: Word('парализуете', 7),
  plural3rdPerson: Word('парализуют', 7),
  masculinePast: Word('парализовал', 9),
  femininePast: Word('парализовала', 9),
  neuterPast: Word('парализовало', 9),
  pluralPast: Word('парализовали', 9),
  imperativeInformal: Word('парализуй', 7),
  imperativeFormal: Word('парализуйте', 7),
  imperfect: [],
};

perfectVerbs.set(парализовать.name.text, парализовать);

export { парализовать };