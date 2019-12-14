import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпроваживать: PerfectVerb = {
  name: Word('выпроваживать', 6),
  singular1stPerson: Word('выпроваживаю', 6),
  singular2ndPerson: Word('выпроваживаешь', 6),
  singular3rdPerson: Word('выпроваживает', 6),
  plural1stPerson: Word('выпроваживаем', 6),
  plural2ndPerson: Word('выпроваживаете', 6),
  plural3rdPerson: Word('выпроваживают', 6),
  masculinePast: Word('выпроваживал', 6),
  femininePast: Word('выпроваживала', 6),
  neuterPast: Word('выпроваживало', 6),
  pluralPast: Word('выпроваживали', 6),
  imperativeInformal: Word('выпроваживай', 6),
  imperativeFormal: Word('выпроваживайте', 6),
  imperfect: [],
};

perfectVerbs.set(выпроваживать.name.text, выпроваживать);

export { выпроваживать };