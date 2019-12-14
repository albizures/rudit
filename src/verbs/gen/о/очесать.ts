import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очесать: PerfectVerb = {
  name: Word('очесать', 4),
  singular1stPerson: Word('очешу', 4),
  singular2ndPerson: Word('очешешь', 2),
  singular3rdPerson: Word('очешет', 2),
  plural1stPerson: Word('очешем', 2),
  plural2ndPerson: Word('очешете', 2),
  plural3rdPerson: Word('очешут', 2),
  masculinePast: Word('очесал', 4),
  femininePast: Word('очесала', 4),
  neuterPast: Word('очесало', 4),
  pluralPast: Word('очесали', 4),
  imperativeInformal: Word('очеши', 4),
  imperativeFormal: Word('очешите', 4),
  imperfect: [],
};

perfectVerbs.set(очесать.name.text, очесать);

export { очесать };