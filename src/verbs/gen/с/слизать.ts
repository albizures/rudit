import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слизать: PerfectVerb = {
  name: Word('слизать', 4),
  singular1stPerson: Word('слижу', 4),
  singular2ndPerson: Word('слижешь', 2),
  singular3rdPerson: Word('слижет', 2),
  plural1stPerson: Word('слижем', 2),
  plural2ndPerson: Word('слижете', 2),
  plural3rdPerson: Word('слижут', 2),
  masculinePast: Word('слизал', 4),
  femininePast: Word('слизала', 4),
  neuterPast: Word('слизало', 4),
  pluralPast: Word('слизали', 4),
  imperativeInformal: Word('слижи', 4),
  imperativeFormal: Word('слижите', 4),
  imperfect: [],
};

perfectVerbs.set(слизать.name.text, слизать);

export { слизать };