import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пририсовать: PerfectVerb = {
  name: Word('пририсовать', 8),
  singular1stPerson: Word('пририсую', 6),
  singular2ndPerson: Word('пририсуешь', 6),
  singular3rdPerson: Word('пририсует', 6),
  plural1stPerson: Word('пририсуем', 6),
  plural2ndPerson: Word('пририсуете', 6),
  plural3rdPerson: Word('пририсуют', 6),
  masculinePast: Word('пририсовал', 8),
  femininePast: Word('пририсовала', 8),
  neuterPast: Word('пририсовало', 8),
  pluralPast: Word('пририсовали', 8),
  imperativeInformal: Word('пририсуй', 6),
  imperativeFormal: Word('пририсуйте', 6),
  imperfect: [],
};

perfectVerbs.set(пририсовать.name.text, пририсовать);

export { пририсовать };