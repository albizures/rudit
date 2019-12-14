import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калибрировать: PerfectVerb = {
  name: Word('калибрировать', 6),
  singular1stPerson: Word('калибрирую', 6),
  singular2ndPerson: Word('калибрируешь', 6),
  singular3rdPerson: Word('калибрирует', 6),
  plural1stPerson: Word('калибрируем', 6),
  plural2ndPerson: Word('калибрируете', 6),
  plural3rdPerson: Word('калибрируют', 6),
  masculinePast: Word('калибрировал', 6),
  femininePast: Word('калибрировала', 6),
  neuterPast: Word('калибрировало', 6),
  pluralPast: Word('калибрировали', 6),
  imperativeInformal: Word('калибрируй', 6),
  imperativeFormal: Word('калибрируйте', 6),
  imperfect: [],
};

perfectVerbs.set(калибрировать.name.text, калибрировать);

export { калибрировать };