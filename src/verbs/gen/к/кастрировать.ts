import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кастрировать: PerfectVerb = {
  name: Word('кастрировать', 5),
  singular1stPerson: Word('кастрирую', 5),
  singular2ndPerson: Word('кастрируешь', 5),
  singular3rdPerson: Word('кастрирует', 5),
  plural1stPerson: Word('кастрируем', 5),
  plural2ndPerson: Word('кастрируете', 5),
  plural3rdPerson: Word('кастрируют', 5),
  masculinePast: Word('кастрировал', 5),
  femininePast: Word('кастрировала', 5),
  neuterPast: Word('кастрировало', 5),
  pluralPast: Word('кастрировали', 5),
  imperativeInformal: Word('кастрируй', 5),
  imperativeFormal: Word('кастрируйте', 5),
  imperfect: [],
};

perfectVerbs.set(кастрировать.name.text, кастрировать);

export { кастрировать };