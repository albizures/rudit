import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбрасывать: PerfectVerb = {
  name: Word('выбрасывать', 4),
  singular1stPerson: Word('выбрасываю', 4),
  singular2ndPerson: Word('выбрасываешь', 4),
  singular3rdPerson: Word('выбрасывает', 4),
  plural1stPerson: Word('выбрасываем', 4),
  plural2ndPerson: Word('выбрасываете', 4),
  plural3rdPerson: Word('выбрасывают', 4),
  masculinePast: Word('выбрасывал', 4),
  femininePast: Word('выбрасывала', 4),
  neuterPast: Word('выбрасывало', 4),
  pluralPast: Word('выбрасывали', 4),
  imperativeInformal: Word('выбрасывай', 4),
  imperativeFormal: Word('выбрасывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выбрасывать.name.text, выбрасывать);

export { выбрасывать };