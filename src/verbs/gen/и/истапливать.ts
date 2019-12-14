import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истапливать: PerfectVerb = {
  name: Word('истапливать', 3),
  singular1stPerson: Word('истапливаю', 3),
  singular2ndPerson: Word('истапливаешь', 3),
  singular3rdPerson: Word('истапливает', 3),
  plural1stPerson: Word('истапливаем', 3),
  plural2ndPerson: Word('истапливаете', 3),
  plural3rdPerson: Word('истапливают', 3),
  masculinePast: Word('истапливал', 3),
  femininePast: Word('истапливала', 3),
  neuterPast: Word('истапливало', 3),
  pluralPast: Word('истапливали', 3),
  imperativeInformal: Word('истапливай', 3),
  imperativeFormal: Word('истапливайте', 3),
  imperfect: [],
};

perfectVerbs.set(истапливать.name.text, истапливать);

export { истапливать };