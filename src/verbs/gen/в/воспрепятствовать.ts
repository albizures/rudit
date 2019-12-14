import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспрепятствовать: PerfectVerb = {
  name: Word('воспрепятствовать', 7),
  singular1stPerson: Word('воспрепятствую', 7),
  singular2ndPerson: Word('воспрепятствуешь', 7),
  singular3rdPerson: Word('воспрепятствует', 7),
  plural1stPerson: Word('воспрепятствуем', 7),
  plural2ndPerson: Word('воспрепятствуете', 7),
  plural3rdPerson: Word('воспрепятствуют', 7),
  masculinePast: Word('воспрепятствовал', 7),
  femininePast: Word('воспрепятствовала', 7),
  neuterPast: Word('воспрепятствовало', 7),
  pluralPast: Word('воспрепятствовали', 7),
  imperativeInformal: Word('воспрепятствуй', 7),
  imperativeFormal: Word('воспрепятствуйте', 7),
  imperfect: ['препятствовать'],
};

perfectVerbs.set(воспрепятствовать.name.text, воспрепятствовать);

export { воспрепятствовать };