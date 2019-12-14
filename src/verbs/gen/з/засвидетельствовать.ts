import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засвидетельствовать: PerfectVerb = {
  name: Word('засвидетельствовать', 6),
  singular1stPerson: Word('засвидетельствую', 6),
  singular2ndPerson: Word('засвидетельствуешь', 6),
  singular3rdPerson: Word('засвидетельствует', 6),
  plural1stPerson: Word('засвидетельствуем', 6),
  plural2ndPerson: Word('засвидетельствуете', 6),
  plural3rdPerson: Word('засвидетельствуют', 6),
  masculinePast: Word('засвидетельствовал', 6),
  femininePast: Word('засвидетельствовала', 6),
  neuterPast: Word('засвидетельствовало', 6),
  pluralPast: Word('засвидетельствовали', 6),
  imperativeInformal: Word('засвидетельствуй', 6),
  imperativeFormal: Word('засвидетельствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(засвидетельствовать.name.text, засвидетельствовать);

export { засвидетельствовать };