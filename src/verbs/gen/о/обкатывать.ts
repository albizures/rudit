import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкатывать: PerfectVerb = {
  name: Word('обкатывать', 3),
  singular1stPerson: Word('обкатываю', 3),
  singular2ndPerson: Word('обкатываешь', 3),
  singular3rdPerson: Word('обкатывает', 3),
  plural1stPerson: Word('обкатываем', 3),
  plural2ndPerson: Word('обкатываете', 3),
  plural3rdPerson: Word('обкатывают', 3),
  masculinePast: Word('обкатывал', 3),
  femininePast: Word('обкатывала', 3),
  neuterPast: Word('обкатывало', 3),
  pluralPast: Word('обкатывали', 3),
  imperativeInformal: Word('обкатывай', 3),
  imperativeFormal: Word('обкатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкатывать.name.text, обкатывать);

export { обкатывать };