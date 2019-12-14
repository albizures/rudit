import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обглядывать: PerfectVerb = {
  name: Word('обглядывать', 4),
  singular1stPerson: Word('обглядываю', 4),
  singular2ndPerson: Word('обглядываешь', 4),
  singular3rdPerson: Word('обглядывает', 4),
  plural1stPerson: Word('обглядываем', 4),
  plural2ndPerson: Word('обглядываете', 4),
  plural3rdPerson: Word('обглядывают', 4),
  masculinePast: Word('обглядывал', 4),
  femininePast: Word('обглядывала', 4),
  neuterPast: Word('обглядывало', 4),
  pluralPast: Word('обглядывали', 4),
  imperativeInformal: Word('обглядывай', 4),
  imperativeFormal: Word('обглядывайте', 4),
  imperfect: [],
};

perfectVerbs.set(обглядывать.name.text, обглядывать);

export { обглядывать };