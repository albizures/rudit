import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попустительствовать: PerfectVerb = {
  name: Word('попустительствовать', 6),
  singular1stPerson: Word('попустительствую', 6),
  singular2ndPerson: Word('попустительствуешь', 6),
  singular3rdPerson: Word('попустительствует', 6),
  plural1stPerson: Word('попустительствуем', 6),
  plural2ndPerson: Word('попустительствуете', 6),
  plural3rdPerson: Word('попустительствуют', 6),
  masculinePast: Word('попустительствовал', 6),
  femininePast: Word('попустительствовала', 6),
  neuterPast: Word('попустительствовало', 6),
  pluralPast: Word('попустительствовали', 6),
  imperativeInformal: Word('попустительствуй', 6),
  imperativeFormal: Word('попустительствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(попустительствовать.name.text, попустительствовать);

export { попустительствовать };