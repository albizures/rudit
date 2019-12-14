import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намыливать: PerfectVerb = {
  name: Word('намыливать', 3),
  singular1stPerson: Word('намыливаю', 3),
  singular2ndPerson: Word('намыливаешь', 3),
  singular3rdPerson: Word('намыливает', 3),
  plural1stPerson: Word('намыливаем', 3),
  plural2ndPerson: Word('намыливаете', 3),
  plural3rdPerson: Word('намыливают', 3),
  masculinePast: Word('намыливал', 3),
  femininePast: Word('намыливала', 3),
  neuterPast: Word('намыливало', 3),
  pluralPast: Word('намыливали', 3),
  imperativeInformal: Word('намыливай', 3),
  imperativeFormal: Word('намыливайте', 3),
  imperfect: [],
};

perfectVerbs.set(намыливать.name.text, намыливать);

export { намыливать };