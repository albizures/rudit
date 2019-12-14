import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ассигновать: PerfectVerb = {
  name: Word('ассигновать', 8),
  singular1stPerson: Word('ассигную', 6),
  singular2ndPerson: Word('ассигнуешь', 6),
  singular3rdPerson: Word('ассигнует', 6),
  plural1stPerson: Word('ассигнуем', 6),
  plural2ndPerson: Word('ассигнуете', 6),
  plural3rdPerson: Word('ассигнуют', 6),
  masculinePast: Word('ассигновал', 8),
  femininePast: Word('ассигновала', 8),
  neuterPast: Word('ассигновало', 8),
  pluralPast: Word('ассигновали', 8),
  imperativeInformal: Word('ассигнуй', 6),
  imperativeFormal: Word('ассигнуйте', 6),
  imperfect: [],
};

perfectVerbs.set(ассигновать.name.text, ассигновать);

export { ассигновать };