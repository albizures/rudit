import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соскальзывать: PerfectVerb = {
  name: Word('соскальзывать', 4),
  singular1stPerson: Word('соскальзываю', 4),
  singular2ndPerson: Word('соскальзываешь', 4),
  singular3rdPerson: Word('соскальзывает', 4),
  plural1stPerson: Word('соскальзываем', 4),
  plural2ndPerson: Word('соскальзываете', 4),
  plural3rdPerson: Word('соскальзывают', 4),
  masculinePast: Word('соскальзывал', 4),
  femininePast: Word('соскальзывала', 4),
  neuterPast: Word('соскальзывало', 4),
  pluralPast: Word('соскальзывали', 4),
  imperativeInformal: Word('соскальзывай', 4),
  imperativeFormal: Word('соскальзывайте', 4),
  imperfect: [],
};

perfectVerbs.set(соскальзывать.name.text, соскальзывать);

export { соскальзывать };