import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоглядывать: PerfectVerb = {
  name: Word('недоглядывать', 6),
  singular1stPerson: Word('недоглядываю', 6),
  singular2ndPerson: Word('недоглядываешь', 6),
  singular3rdPerson: Word('недоглядывает', 6),
  plural1stPerson: Word('недоглядываем', 6),
  plural2ndPerson: Word('недоглядываете', 6),
  plural3rdPerson: Word('недоглядывают', 6),
  masculinePast: Word('недоглядывал', 6),
  femininePast: Word('недоглядывала', 6),
  neuterPast: Word('недоглядывало', 6),
  pluralPast: Word('недоглядывали', 6),
  imperativeInformal: Word('недоглядывай', 6),
  imperativeFormal: Word('недоглядывайте', 6),
  imperfect: [],
};

perfectVerbs.set(недоглядывать.name.text, недоглядывать);

export { недоглядывать };