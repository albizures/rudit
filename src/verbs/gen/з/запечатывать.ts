import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечатывать: PerfectVerb = {
  name: Word('запечатывать', 5),
  singular1stPerson: Word('запечатываю', 5),
  singular2ndPerson: Word('запечатываешь', 5),
  singular3rdPerson: Word('запечатывает', 5),
  plural1stPerson: Word('запечатываем', 5),
  plural2ndPerson: Word('запечатываете', 5),
  plural3rdPerson: Word('запечатывают', 5),
  masculinePast: Word('запечатывал', 5),
  femininePast: Word('запечатывала', 5),
  neuterPast: Word('запечатывало', 5),
  pluralPast: Word('запечатывали', 5),
  imperativeInformal: Word('запечатывай', 5),
  imperativeFormal: Word('запечатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(запечатывать.name.text, запечатывать);

export { запечатывать };