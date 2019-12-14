import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выглядывать: PerfectVerb = {
  name: Word('выглядывать', 4),
  singular1stPerson: Word('выглядываю', 4),
  singular2ndPerson: Word('выглядываешь', 4),
  singular3rdPerson: Word('выглядывает', 4),
  plural1stPerson: Word('выглядываем', 4),
  plural2ndPerson: Word('выглядываете', 4),
  plural3rdPerson: Word('выглядывают', 4),
  masculinePast: Word('выглядывал', 4),
  femininePast: Word('выглядывала', 4),
  neuterPast: Word('выглядывало', 4),
  pluralPast: Word('выглядывали', 4),
  imperativeInformal: Word('выглядывай', 4),
  imperativeFormal: Word('выглядывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выглядывать.name.text, выглядывать);

export { выглядывать };