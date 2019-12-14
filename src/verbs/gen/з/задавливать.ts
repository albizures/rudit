import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задавливать: PerfectVerb = {
  name: Word('задавливать', 3),
  singular1stPerson: Word('задавливаю', 3),
  singular2ndPerson: Word('задавливаешь', 3),
  singular3rdPerson: Word('задавливает', 3),
  plural1stPerson: Word('задавливаем', 3),
  plural2ndPerson: Word('задавливаете', 3),
  plural3rdPerson: Word('задавливают', 3),
  masculinePast: Word('задавливал', 3),
  femininePast: Word('задавливала', 3),
  neuterPast: Word('задавливало', 3),
  pluralPast: Word('задавливали', 3),
  imperativeInformal: Word('задавливай', 3),
  imperativeFormal: Word('задавливайте', 3),
  imperfect: [],
};

perfectVerbs.set(задавливать.name.text, задавливать);

export { задавливать };