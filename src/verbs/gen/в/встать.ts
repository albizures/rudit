import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встать: PerfectVerb = {
  name: Word('встать', 3),
  singular1stPerson: Word('встану', 3),
  singular2ndPerson: Word('встанешь', 3),
  singular3rdPerson: Word('встанет', 3),
  plural1stPerson: Word('встанем', 3),
  plural2ndPerson: Word('встанете', 3),
  plural3rdPerson: Word('встанут', 3),
  masculinePast: Word('встал', 3),
  femininePast: Word('встала', 3),
  neuterPast: Word('встало', 3),
  pluralPast: Word('встали', 3),
  imperativeInformal: Word('встань', 3),
  imperativeFormal: Word('встаньте', 3),
  imperfect: ['вставать'],
};

perfectVerbs.set(встать.name.text, встать);

export { встать };