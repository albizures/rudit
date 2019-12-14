import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсасывать: PerfectVerb = {
  name: Word('обсасывать', 3),
  singular1stPerson: Word('обсасываю', 3),
  singular2ndPerson: Word('обсасываешь', 3),
  singular3rdPerson: Word('обсасывает', 3),
  plural1stPerson: Word('обсасываем', 3),
  plural2ndPerson: Word('обсасываете', 3),
  plural3rdPerson: Word('обсасывают', 3),
  masculinePast: Word('обсасывал', 3),
  femininePast: Word('обсасывала', 3),
  neuterPast: Word('обсасывало', 3),
  pluralPast: Word('обсасывали', 3),
  imperativeInformal: Word('обсасывай', 3),
  imperativeFormal: Word('обсасывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обсасывать.name.text, обсасывать);

export { обсасывать };