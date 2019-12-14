import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жаждать: PerfectVerb = {
  name: Word('жаждать', 1),
  singular1stPerson: Word('жажду', 1),
  singular2ndPerson: Word('жаждешь', 1),
  singular3rdPerson: Word('жаждет', 1),
  plural1stPerson: Word('жаждем', 1),
  plural2ndPerson: Word('жаждете', 1),
  plural3rdPerson: Word('жаждут', 1),
  masculinePast: Word('жаждал', 1),
  femininePast: Word('жаждала', 1),
  neuterPast: Word('жаждало', 1),
  pluralPast: Word('жаждали', 1),
  imperativeInformal: Word('жажди', 1),
  imperativeFormal: Word('жаждите', 1),
  imperfect: [],
};

perfectVerbs.set(жаждать.name.text, жаждать);

export { жаждать };