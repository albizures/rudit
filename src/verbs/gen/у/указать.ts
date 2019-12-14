import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const указать: PerfectVerb = {
  name: Word('указать', 4),
  singular1stPerson: Word('укажу', 4),
  singular2ndPerson: Word('укажешь', 2),
  singular3rdPerson: Word('укажет', 2),
  plural1stPerson: Word('укажем', 2),
  plural2ndPerson: Word('укажете', 2),
  plural3rdPerson: Word('укажут', 2),
  masculinePast: Word('указал', 4),
  femininePast: Word('указала', 4),
  neuterPast: Word('указало', 4),
  pluralPast: Word('указали', 4),
  imperativeInformal: Word('укажи', 4),
  imperativeFormal: Word('укажите', 4),
  imperfect: ['указывать'],
};

perfectVerbs.set(указать.name.text, указать);

export { указать };