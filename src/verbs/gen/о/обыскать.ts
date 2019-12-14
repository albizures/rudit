import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обыскать: PerfectVerb = {
  name: Word('обыскать', 5),
  singular1stPerson: Word('обыщу', 4),
  singular2ndPerson: Word('обыщешь', 2),
  singular3rdPerson: Word('обыщет', 2),
  plural1stPerson: Word('обыщем', 2),
  plural2ndPerson: Word('обыщете', 2),
  plural3rdPerson: Word('обыщут', 2),
  masculinePast: Word('обыскал', 5),
  femininePast: Word('обыскала', 5),
  neuterPast: Word('обыскало', 5),
  pluralPast: Word('обыскали', 5),
  imperativeInformal: Word('обыщи', 4),
  imperativeFormal: Word('обыщите', 4),
  imperfect: [],
};

perfectVerbs.set(обыскать.name.text, обыскать);

export { обыскать };