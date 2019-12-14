import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сорганизовать: PerfectVerb = {
  name: Word('сорганизовать', 10),
  singular1stPerson: Word('сорганизую', 8),
  singular2ndPerson: Word('сорганизуешь', 8),
  singular3rdPerson: Word('сорганизует', 8),
  plural1stPerson: Word('сорганизуем', 8),
  plural2ndPerson: Word('сорганизуете', 8),
  plural3rdPerson: Word('сорганизуют', 8),
  masculinePast: Word('сорганизовал', 10),
  femininePast: Word('сорганизовала', 10),
  neuterPast: Word('сорганизовало', 10),
  pluralPast: Word('сорганизовали', 10),
  imperativeInformal: Word('сорганизуй', 8),
  imperativeFormal: Word('сорганизуйте', 8),
  imperfect: [],
};

perfectVerbs.set(сорганизовать.name.text, сорганизовать);

export { сорганизовать };