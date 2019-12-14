import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкусывать: PerfectVerb = {
  name: Word('обкусывать', 3),
  singular1stPerson: Word('обкусываю', 3),
  singular2ndPerson: Word('обкусываешь', 3),
  singular3rdPerson: Word('обкусывает', 3),
  plural1stPerson: Word('обкусываем', 3),
  plural2ndPerson: Word('обкусываете', 3),
  plural3rdPerson: Word('обкусывают', 3),
  masculinePast: Word('обкусывал', 3),
  femininePast: Word('обкусывала', 3),
  neuterPast: Word('обкусывало', 3),
  pluralPast: Word('обкусывали', 3),
  imperativeInformal: Word('обкусывай', 3),
  imperativeFormal: Word('обкусывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкусывать.name.text, обкусывать);

export { обкусывать };