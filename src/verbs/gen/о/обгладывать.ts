import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгладывать: PerfectVerb = {
  name: Word('обгладывать', 4),
  singular1stPerson: Word('обгладываю', 4),
  singular2ndPerson: Word('обгладываешь', 4),
  singular3rdPerson: Word('обгладывает', 4),
  plural1stPerson: Word('обгладываем', 4),
  plural2ndPerson: Word('обгладываете', 4),
  plural3rdPerson: Word('обгладывают', 4),
  masculinePast: Word('обгладывал', 4),
  femininePast: Word('обгладывала', 4),
  neuterPast: Word('обгладывало', 4),
  pluralPast: Word('обгладывали', 4),
  imperativeInformal: Word('обгладывай', 4),
  imperativeFormal: Word('обгладывайте', 4),
  imperfect: [],
};

perfectVerbs.set(обгладывать.name.text, обгладывать);

export { обгладывать };