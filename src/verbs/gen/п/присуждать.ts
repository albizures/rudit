import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присуждать: PerfectVerb = {
  name: Word('присуждать', 7),
  singular1stPerson: Word('присуждаю', 7),
  singular2ndPerson: Word('присуждаешь', 7),
  singular3rdPerson: Word('присуждает', 7),
  plural1stPerson: Word('присуждаем', 7),
  plural2ndPerson: Word('присуждаете', 7),
  plural3rdPerson: Word('присуждают', 7),
  masculinePast: Word('присуждал', 7),
  femininePast: Word('присуждала', 7),
  neuterPast: Word('присуждало', 7),
  pluralPast: Word('присуждали', 7),
  imperativeInformal: Word('присуждай', 7),
  imperativeFormal: Word('присуждайте', 7),
  imperfect: [],
};

perfectVerbs.set(присуждать.name.text, присуждать);

export { присуждать };