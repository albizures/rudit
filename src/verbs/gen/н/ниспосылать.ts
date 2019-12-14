import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ниспосылать: PerfectVerb = {
  name: Word('ниспосылать', 8),
  singular1stPerson: Word('ниспосылаю', 8),
  singular2ndPerson: Word('ниспосылаешь', 8),
  singular3rdPerson: Word('ниспосылает', 8),
  plural1stPerson: Word('ниспосылаем', 8),
  plural2ndPerson: Word('ниспосылаете', 8),
  plural3rdPerson: Word('ниспосылают', 8),
  masculinePast: Word('ниспосылал', 8),
  femininePast: Word('ниспосылала', 8),
  neuterPast: Word('ниспосылало', 8),
  pluralPast: Word('ниспосылали', 8),
  imperativeInformal: Word('ниспосылай', 8),
  imperativeFormal: Word('ниспосылайте', 8),
  imperfect: [],
};

perfectVerbs.set(ниспосылать.name.text, ниспосылать);

export { ниспосылать };