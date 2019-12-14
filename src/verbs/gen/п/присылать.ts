import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присылать: PerfectVerb = {
  name: Word('присылать', 6),
  singular1stPerson: Word('присылаю', 6),
  singular2ndPerson: Word('присылаешь', 6),
  singular3rdPerson: Word('присылает', 6),
  plural1stPerson: Word('присылаем', 6),
  plural2ndPerson: Word('присылаете', 6),
  plural3rdPerson: Word('присылают', 6),
  masculinePast: Word('присылал', 6),
  femininePast: Word('присылала', 6),
  neuterPast: Word('присылало', 6),
  pluralPast: Word('присылали', 6),
  imperativeInformal: Word('присылай', 6),
  imperativeFormal: Word('присылайте', 6),
  imperfect: [],
};

perfectVerbs.set(присылать.name.text, присылать);

export { присылать };