import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обделывать: PerfectVerb = {
  name: Word('обделывать', 3),
  singular1stPerson: Word('обделываю', 3),
  singular2ndPerson: Word('обделываешь', 3),
  singular3rdPerson: Word('обделывает', 3),
  plural1stPerson: Word('обделываем', 3),
  plural2ndPerson: Word('обделываете', 3),
  plural3rdPerson: Word('обделывают', 3),
  masculinePast: Word('обделывал', 3),
  femininePast: Word('обделывала', 3),
  neuterPast: Word('обделывало', 3),
  pluralPast: Word('обделывали', 3),
  imperativeInformal: Word('обделывай', 3),
  imperativeFormal: Word('обделывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обделывать.name.text, обделывать);

export { обделывать };