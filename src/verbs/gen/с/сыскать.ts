import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыскать: PerfectVerb = {
  name: Word('сыскать', 4),
  singular1stPerson: Word('сыщу', 3),
  singular2ndPerson: Word('сыщешь', 1),
  singular3rdPerson: Word('сыщет', 1),
  plural1stPerson: Word('сыщем', 1),
  plural2ndPerson: Word('сыщете', 1),
  plural3rdPerson: Word('сыщут', 1),
  masculinePast: Word('сыскал', 4),
  femininePast: Word('сыскала', 4),
  neuterPast: Word('сыскало', 4),
  pluralPast: Word('сыскали', 4),
  imperativeInformal: Word('сыщи', 3),
  imperativeFormal: Word('сыщите', 3),
  imperfect: [],
};

perfectVerbs.set(сыскать.name.text, сыскать);

export { сыскать };