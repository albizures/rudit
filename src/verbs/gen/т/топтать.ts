import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топтать: PerfectVerb = {
  name: Word('топтать', 4),
  singular1stPerson: Word('топчу', 4),
  singular2ndPerson: Word('топчешь', 1),
  singular3rdPerson: Word('топчет', 1),
  plural1stPerson: Word('топчем', 1),
  plural2ndPerson: Word('топчете', 1),
  plural3rdPerson: Word('топчут', 1),
  masculinePast: Word('топтал', 4),
  femininePast: Word('топтала', 4),
  neuterPast: Word('топтало', 4),
  pluralPast: Word('топтали', 4),
  imperativeInformal: Word('топчи', 4),
  imperativeFormal: Word('топчите', 4),
  imperfect: [],
};

perfectVerbs.set(топтать.name.text, топтать);

export { топтать };