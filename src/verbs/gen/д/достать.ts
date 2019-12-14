import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достать: PerfectVerb = {
  name: Word('достать', 4),
  singular1stPerson: Word('достану', 4),
  singular2ndPerson: Word('достанешь', 4),
  singular3rdPerson: Word('достанет', 4),
  plural1stPerson: Word('достанем', 4),
  plural2ndPerson: Word('достанете', 4),
  plural3rdPerson: Word('достанут', 4),
  masculinePast: Word('достал', 4),
  femininePast: Word('достала', 4),
  neuterPast: Word('достало', 4),
  pluralPast: Word('достали', 4),
  imperativeInformal: Word('достань', 4),
  imperativeFormal: Word('достаньте', 4),
  imperfect: ['доставать'],
};

perfectVerbs.set(достать.name.text, достать);

export { достать };