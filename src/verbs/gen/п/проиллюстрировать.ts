import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проиллюстрировать: PerfectVerb = {
  name: Word('проиллюстрировать', 10),
  singular1stPerson: Word('проиллюстрирую', 10),
  singular2ndPerson: Word('проиллюстрируешь', 10),
  singular3rdPerson: Word('проиллюстрирует', 10),
  plural1stPerson: Word('проиллюстрируем', 10),
  plural2ndPerson: Word('проиллюстрируете', 10),
  plural3rdPerson: Word('проиллюстрируют', 10),
  masculinePast: Word('проиллюстрировал', 10),
  femininePast: Word('проиллюстрировала', 10),
  neuterPast: Word('проиллюстрировало', 10),
  pluralPast: Word('проиллюстрировали', 10),
  imperativeInformal: Word('проиллюстрируй', 10),
  imperativeFormal: Word('проиллюстрируйте', 10),
  imperfect: [],
};

perfectVerbs.set(проиллюстрировать.name.text, проиллюстрировать);

export { проиллюстрировать };