import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассуждать: PerfectVerb = {
  name: Word('рассуждать', 7),
  singular1stPerson: Word('рассуждаю', 7),
  singular2ndPerson: Word('рассуждаешь', 7),
  singular3rdPerson: Word('рассуждает', 7),
  plural1stPerson: Word('рассуждаем', 7),
  plural2ndPerson: Word('рассуждаете', 7),
  plural3rdPerson: Word('рассуждают', 7),
  masculinePast: Word('рассуждал', 7),
  femininePast: Word('рассуждала', 7),
  neuterPast: Word('рассуждало', 7),
  pluralPast: Word('рассуждали', 7),
  imperativeInformal: Word('рассуждай', 7),
  imperativeFormal: Word('рассуждайте', 7),
  imperfect: [],
};

perfectVerbs.set(рассуждать.name.text, рассуждать);

export { рассуждать };