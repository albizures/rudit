import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восстанавливать: PerfectVerb = {
  name: Word('восстанавливать', 7),
  singular1stPerson: Word('восстанавливаю', 7),
  singular2ndPerson: Word('восстанавливаешь', 7),
  singular3rdPerson: Word('восстанавливает', 7),
  plural1stPerson: Word('восстанавливаем', 7),
  plural2ndPerson: Word('восстанавливаете', 7),
  plural3rdPerson: Word('восстанавливают', 7),
  masculinePast: Word('восстанавливал', 7),
  femininePast: Word('восстанавливала', 7),
  neuterPast: Word('восстанавливало', 7),
  pluralPast: Word('восстанавливали', 7),
  imperativeInformal: Word('восстанавливай', 7),
  imperativeFormal: Word('восстанавливайте', 7),
  imperfect: [],
};

perfectVerbs.set(восстанавливать.name.text, восстанавливать);

export { восстанавливать };