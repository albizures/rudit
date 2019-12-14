import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const газовать: PerfectVerb = {
  name: Word('газовать', 5),
  singular1stPerson: Word('газую', 3),
  singular2ndPerson: Word('газуешь', 3),
  singular3rdPerson: Word('газует', 3),
  plural1stPerson: Word('газуем', 3),
  plural2ndPerson: Word('газуете', 3),
  plural3rdPerson: Word('газуют', 3),
  masculinePast: Word('газовал', 5),
  femininePast: Word('газовала', 5),
  neuterPast: Word('газовало', 5),
  pluralPast: Word('газовали', 5),
  imperativeInformal: Word('газуй', 3),
  imperativeFormal: Word('газуйте', 3),
  imperfect: [],
};

perfectVerbs.set(газовать.name.text, газовать);

export { газовать };