import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ревновать: PerfectVerb = {
  name: Word('ревновать', 6),
  singular1stPerson: Word('ревную', 4),
  singular2ndPerson: Word('ревнуешь', 4),
  singular3rdPerson: Word('ревнует', 4),
  plural1stPerson: Word('ревнуем', 4),
  plural2ndPerson: Word('ревнуете', 4),
  plural3rdPerson: Word('ревнуют', 4),
  masculinePast: Word('ревновал', 6),
  femininePast: Word('ревновала', 6),
  neuterPast: Word('ревновало', 6),
  pluralPast: Word('ревновали', 6),
  imperativeInformal: Word('ревнуй', 4),
  imperativeFormal: Word('ревнуйте', 4),
  imperfect: [],
};

perfectVerbs.set(ревновать.name.text, ревновать);

export { ревновать };