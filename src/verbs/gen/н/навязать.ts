import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навязать: PerfectVerb = {
  name: Word('навязать', 5),
  singular1stPerson: Word('навяжу', 5),
  singular2ndPerson: Word('навяжешь', 3),
  singular3rdPerson: Word('навяжет', 3),
  plural1stPerson: Word('навяжем', 3),
  plural2ndPerson: Word('навяжете', 3),
  plural3rdPerson: Word('навяжут', 3),
  masculinePast: Word('навязал', 5),
  femininePast: Word('навязала', 5),
  neuterPast: Word('навязало', 5),
  pluralPast: Word('навязали', 5),
  imperativeInformal: Word('навяжи', 5),
  imperativeFormal: Word('навяжите', 5),
  imperfect: [],
};

perfectVerbs.set(навязать.name.text, навязать);

export { навязать };