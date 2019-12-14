import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довершать: PerfectVerb = {
  name: Word('довершать', 6),
  singular1stPerson: Word('довершаю', 6),
  singular2ndPerson: Word('довершаешь', 6),
  singular3rdPerson: Word('довершает', 6),
  plural1stPerson: Word('довершаем', 6),
  plural2ndPerson: Word('довершаете', 6),
  plural3rdPerson: Word('довершают', 6),
  masculinePast: Word('довершал', 6),
  femininePast: Word('довершала', 6),
  neuterPast: Word('довершало', 6),
  pluralPast: Word('довершали', 6),
  imperativeInformal: Word('довершай', 6),
  imperativeFormal: Word('довершайте', 6),
  imperfect: [],
};

perfectVerbs.set(довершать.name.text, довершать);

export { довершать };