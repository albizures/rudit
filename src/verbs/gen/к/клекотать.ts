import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клекотать: PerfectVerb = {
  name: Word('клекотать', 6),
  singular1stPerson: Word('клекочу', 6),
  singular2ndPerson: Word('клекочешь', 4),
  singular3rdPerson: Word('клекочет', 4),
  plural1stPerson: Word('клекочем', 4),
  plural2ndPerson: Word('клекочете', 4),
  plural3rdPerson: Word('клекочут', 4),
  masculinePast: Word('клекотал', 6),
  femininePast: Word('клекотала', 6),
  neuterPast: Word('клекотало', 6),
  pluralPast: Word('клекотали', 6),
  imperativeInformal: Word('клекочи', 6),
  imperativeFormal: Word('клекочите', 6),
  imperfect: [],
};

perfectVerbs.set(клекотать.name.text, клекотать);

export { клекотать };