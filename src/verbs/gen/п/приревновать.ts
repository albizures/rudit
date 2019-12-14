import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приревновать: PerfectVerb = {
  name: Word('приревновать', 9),
  singular1stPerson: Word('приревную', 7),
  singular2ndPerson: Word('приревнуешь', 7),
  singular3rdPerson: Word('приревнует', 7),
  plural1stPerson: Word('приревнуем', 7),
  plural2ndPerson: Word('приревнуете', 7),
  plural3rdPerson: Word('приревнуют', 7),
  masculinePast: Word('приревновал', 9),
  femininePast: Word('приревновала', 9),
  neuterPast: Word('приревновало', 9),
  pluralPast: Word('приревновали', 9),
  imperativeInformal: Word('приревнуй', 7),
  imperativeFormal: Word('приревнуйте', 7),
  imperfect: [],
};

perfectVerbs.set(приревновать.name.text, приревновать);

export { приревновать };