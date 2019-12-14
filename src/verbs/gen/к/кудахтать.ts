import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кудахтать: PerfectVerb = {
  name: Word('кудахтать', 3),
  singular1stPerson: Word('кудахчу', 3),
  singular2ndPerson: Word('кудахчешь', 3),
  singular3rdPerson: Word('кудахчет', 3),
  plural1stPerson: Word('кудахчем', 3),
  plural2ndPerson: Word('кудахчете', 3),
  plural3rdPerson: Word('кудахчут', 3),
  masculinePast: Word('кудахтал', 3),
  femininePast: Word('кудахтала', 3),
  neuterPast: Word('кудахтало', 3),
  pluralPast: Word('кудахтали', 3),
  imperativeInformal: Word('кудахчи', 3),
  imperativeFormal: Word('кудахчите', 3),
  imperfect: [],
};

perfectVerbs.set(кудахтать.name.text, кудахтать);

export { кудахтать };