import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обугливать: PerfectVerb = {
  name: Word('обугливать', 2),
  singular1stPerson: Word('обугливаю', 2),
  singular2ndPerson: Word('обугливаешь', 2),
  singular3rdPerson: Word('обугливает', 2),
  plural1stPerson: Word('обугливаем', 2),
  plural2ndPerson: Word('обугливаете', 2),
  plural3rdPerson: Word('обугливают', 2),
  masculinePast: Word('обугливал', 2),
  femininePast: Word('обугливала', 2),
  neuterPast: Word('обугливало', 2),
  pluralPast: Word('обугливали', 2),
  imperativeInformal: Word('обугливай', 2),
  imperativeFormal: Word('обугливайте', 2),
  imperfect: [],
};

perfectVerbs.set(обугливать.name.text, обугливать);

export { обугливать };