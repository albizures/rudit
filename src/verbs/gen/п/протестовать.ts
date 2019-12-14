import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протестовать: PerfectVerb = {
  name: Word('протестовать', 9),
  singular1stPerson: Word('протестую', 7),
  singular2ndPerson: Word('протестуешь', 7),
  singular3rdPerson: Word('протестует', 7),
  plural1stPerson: Word('протестуем', 7),
  plural2ndPerson: Word('протестуете', 7),
  plural3rdPerson: Word('протестуют', 7),
  masculinePast: Word('протестовал', 9),
  femininePast: Word('протестовала', 9),
  neuterPast: Word('протестовало', 9),
  pluralPast: Word('протестовали', 9),
  imperativeInformal: Word('протестуй', 7),
  imperativeFormal: Word('протестуйте', 7),
  imperfect: ['запротестовать'],
};

perfectVerbs.set(протестовать.name.text, протестовать);

export { протестовать };