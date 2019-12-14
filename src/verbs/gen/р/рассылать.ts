import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассылать: PerfectVerb = {
  name: Word('рассылать', 6),
  singular1stPerson: Word('рассылаю', 6),
  singular2ndPerson: Word('рассылаешь', 6),
  singular3rdPerson: Word('рассылает', 6),
  plural1stPerson: Word('рассылаем', 6),
  plural2ndPerson: Word('рассылаете', 6),
  plural3rdPerson: Word('рассылают', 6),
  masculinePast: Word('рассылал', 6),
  femininePast: Word('рассылала', 6),
  neuterPast: Word('рассылало', 6),
  pluralPast: Word('рассылали', 6),
  imperativeInformal: Word('рассылай', 6),
  imperativeFormal: Word('рассылайте', 6),
  imperfect: [],
};

perfectVerbs.set(рассылать.name.text, рассылать);

export { рассылать };