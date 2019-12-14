import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забормотать: PerfectVerb = {
  name: Word('забормотать', 8),
  singular1stPerson: Word('забормочу', 8),
  singular2ndPerson: Word('забормочешь', 6),
  singular3rdPerson: Word('забормочет', 6),
  plural1stPerson: Word('забормочем', 6),
  plural2ndPerson: Word('забормочете', 6),
  plural3rdPerson: Word('забормочут', 6),
  masculinePast: Word('забормотал', 8),
  femininePast: Word('забормотала', 8),
  neuterPast: Word('забормотало', 8),
  pluralPast: Word('забормотали', 8),
  imperativeInformal: Word('забормочи', 8),
  imperativeFormal: Word('забормочите', 8),
  imperfect: [],
};

perfectVerbs.set(забормотать.name.text, забормотать);

export { забормотать };