import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клишировать: PerfectVerb = {
  name: Word('клишировать', 4),
  singular1stPerson: Word('клиширую', 4),
  singular2ndPerson: Word('клишируешь', 4),
  singular3rdPerson: Word('клиширует', 4),
  plural1stPerson: Word('клишируем', 4),
  plural2ndPerson: Word('клишируете', 4),
  plural3rdPerson: Word('клишируют', 4),
  masculinePast: Word('клишировал', 4),
  femininePast: Word('клишировала', 4),
  neuterPast: Word('клишировало', 4),
  pluralPast: Word('клишировали', 4),
  imperativeInformal: Word('клишируй', 4),
  imperativeFormal: Word('клишируйте', 4),
  imperfect: [],
};

perfectVerbs.set(клишировать.name.text, клишировать);

export { клишировать };