import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкладывать: PerfectVerb = {
  name: Word('выкладывать', 4),
  singular1stPerson: Word('выкладываю', 4),
  singular2ndPerson: Word('выкладываешь', 4),
  singular3rdPerson: Word('выкладывает', 4),
  plural1stPerson: Word('выкладываем', 4),
  plural2ndPerson: Word('выкладываете', 4),
  plural3rdPerson: Word('выкладывают', 4),
  masculinePast: Word('выкладывал', 4),
  femininePast: Word('выкладывала', 4),
  neuterPast: Word('выкладывало', 4),
  pluralPast: Word('выкладывали', 4),
  imperativeInformal: Word('выкладывай', 4),
  imperativeFormal: Word('выкладывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выкладывать.name.text, выкладывать);

export { выкладывать };