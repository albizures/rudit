import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захохотать: PerfectVerb = {
  name: Word('захохотать', 7),
  singular1stPerson: Word('захохочу', 7),
  singular2ndPerson: Word('захохочешь', 5),
  singular3rdPerson: Word('захохочет', 5),
  plural1stPerson: Word('захохочем', 5),
  plural2ndPerson: Word('захохочете', 5),
  plural3rdPerson: Word('захохочут', 5),
  masculinePast: Word('захохотал', 7),
  femininePast: Word('захохотала', 7),
  neuterPast: Word('захохотало', 7),
  pluralPast: Word('захохотали', 7),
  imperativeInformal: Word('захохочи', 7),
  imperativeFormal: Word('захохочите', 7),
  imperfect: ['хохотать'],
};

perfectVerbs.set(захохотать.name.text, захохотать);

export { захохотать };