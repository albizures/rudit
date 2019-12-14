import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поцеловать: PerfectVerb = {
  name: Word('поцеловать', 7),
  singular1stPerson: Word('поцелую', 5),
  singular2ndPerson: Word('поцелуешь', 5),
  singular3rdPerson: Word('поцелует', 5),
  plural1stPerson: Word('поцелуем', 5),
  plural2ndPerson: Word('поцелуете', 5),
  plural3rdPerson: Word('поцелуют', 5),
  masculinePast: Word('поцеловал', 7),
  femininePast: Word('поцеловала', 7),
  neuterPast: Word('поцеловало', 7),
  pluralPast: Word('поцеловали', 7),
  imperativeInformal: Word('поцелуй', 5),
  imperativeFormal: Word('поцелуйте', 5),
  imperfect: ['целовать'],
};

perfectVerbs.set(поцеловать.name.text, поцеловать);

export { поцеловать };