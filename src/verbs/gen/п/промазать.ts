import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промазать: PerfectVerb = {
  name: Word('промазать', 4),
  singular1stPerson: Word('промажу', 4),
  singular2ndPerson: Word('промажешь', 4),
  singular3rdPerson: Word('промажет', 4),
  plural1stPerson: Word('промажем', 4),
  plural2ndPerson: Word('промажете', 4),
  plural3rdPerson: Word('промажут', 4),
  masculinePast: Word('промазал', 4),
  femininePast: Word('промазала', 4),
  neuterPast: Word('промазало', 4),
  pluralPast: Word('промазали', 4),
  imperativeInformal: Word('промажь', 4),
  imperativeFormal: Word('промажьте', 4),
  imperfect: ['мазать','промазывать'],
};

perfectVerbs.set(промазать.name.text, промазать);

export { промазать };