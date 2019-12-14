import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заграждать: PerfectVerb = {
  name: Word('заграждать', 7),
  singular1stPerson: Word('заграждаю', 7),
  singular2ndPerson: Word('заграждаешь', 7),
  singular3rdPerson: Word('заграждает', 7),
  plural1stPerson: Word('заграждаем', 7),
  plural2ndPerson: Word('заграждаете', 7),
  plural3rdPerson: Word('заграждают', 7),
  masculinePast: Word('заграждал', 7),
  femininePast: Word('заграждала', 7),
  neuterPast: Word('заграждало', 7),
  pluralPast: Word('заграждали', 7),
  imperativeInformal: Word('заграждай', 7),
  imperativeFormal: Word('заграждайте', 7),
  imperfect: [],
};

perfectVerbs.set(заграждать.name.text, заграждать);

export { заграждать };