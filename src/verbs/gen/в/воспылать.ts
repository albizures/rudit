import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспылать: PerfectVerb = {
  name: Word('воспылать', 6),
  singular1stPerson: Word('воспылаю', 6),
  singular2ndPerson: Word('воспылаешь', 6),
  singular3rdPerson: Word('воспылает', 6),
  plural1stPerson: Word('воспылаем', 6),
  plural2ndPerson: Word('воспылаете', 6),
  plural3rdPerson: Word('воспылают', 6),
  masculinePast: Word('воспылал', 6),
  femininePast: Word('воспылала', 6),
  neuterPast: Word('воспылало', 6),
  pluralPast: Word('воспылали', 6),
  imperativeInformal: Word('воспылай', 6),
  imperativeFormal: Word('воспылайте', 6),
  imperfect: [],
};

perfectVerbs.set(воспылать.name.text, воспылать);

export { воспылать };