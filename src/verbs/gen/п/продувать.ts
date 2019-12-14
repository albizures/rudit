import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продувать: PerfectVerb = {
  name: Word('продувать', 6),
  singular1stPerson: Word('продуваю', 6),
  singular2ndPerson: Word('продуваешь', 6),
  singular3rdPerson: Word('продувает', 6),
  plural1stPerson: Word('продуваем', 6),
  plural2ndPerson: Word('продуваете', 6),
  plural3rdPerson: Word('продувают', 6),
  masculinePast: Word('продувал', 6),
  femininePast: Word('продувала', 6),
  neuterPast: Word('продувало', 6),
  pluralPast: Word('продували', 6),
  imperativeInformal: Word('продувай', 6),
  imperativeFormal: Word('продувайте', 6),
  imperfect: [],
};

perfectVerbs.set(продувать.name.text, продувать);

export { продувать };