import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докладывать: PerfectVerb = {
  name: Word('докладывать', 4),
  singular1stPerson: Word('докладываю', 4),
  singular2ndPerson: Word('докладываешь', 4),
  singular3rdPerson: Word('докладывает', 4),
  plural1stPerson: Word('докладываем', 4),
  plural2ndPerson: Word('докладываете', 4),
  plural3rdPerson: Word('докладывают', 4),
  masculinePast: Word('докладывал', 4),
  femininePast: Word('докладывала', 4),
  neuterPast: Word('докладывало', 4),
  pluralPast: Word('докладывали', 4),
  imperativeInformal: Word('докладывай', 4),
  imperativeFormal: Word('докладывайте', 4),
  imperfect: [],
};

perfectVerbs.set(докладывать.name.text, докладывать);

export { докладывать };