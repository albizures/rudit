import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реставрировать: PerfectVerb = {
  name: Word('реставрировать', 7),
  singular1stPerson: Word('реставрирую', 7),
  singular2ndPerson: Word('реставрируешь', 7),
  singular3rdPerson: Word('реставрирует', 7),
  plural1stPerson: Word('реставрируем', 7),
  plural2ndPerson: Word('реставрируете', 7),
  plural3rdPerson: Word('реставрируют', 7),
  masculinePast: Word('реставрировал', 7),
  femininePast: Word('реставрировала', 7),
  neuterPast: Word('реставрировало', 7),
  pluralPast: Word('реставрировали', 7),
  imperativeInformal: Word('реставрируй', 7),
  imperativeFormal: Word('реставрируйте', 7),
  imperfect: [],
};

perfectVerbs.set(реставрировать.name.text, реставрировать);

export { реставрировать };