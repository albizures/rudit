import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскальзывать: PerfectVerb = {
  name: Word('выскальзывать', 4),
  singular1stPerson: Word('выскальзываю', 4),
  singular2ndPerson: Word('выскальзываешь', 4),
  singular3rdPerson: Word('выскальзывает', 4),
  plural1stPerson: Word('выскальзываем', 4),
  plural2ndPerson: Word('выскальзываете', 4),
  plural3rdPerson: Word('выскальзывают', 4),
  masculinePast: Word('выскальзывал', 4),
  femininePast: Word('выскальзывала', 4),
  neuterPast: Word('выскальзывало', 4),
  pluralPast: Word('выскальзывали', 4),
  imperativeInformal: Word('выскальзывай', 4),
  imperativeFormal: Word('выскальзывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выскальзывать.name.text, выскальзывать);

export { выскальзывать };