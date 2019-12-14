import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырядить: PerfectVerb = {
  name: Word('вырядить', 1),
  singular1stPerson: Word('выряжу', 1),
  singular2ndPerson: Word('вырядишь', 1),
  singular3rdPerson: Word('вырядит', 1),
  plural1stPerson: Word('вырядим', 1),
  plural2ndPerson: Word('вырядите', 1),
  plural3rdPerson: Word('вырядят', 1),
  masculinePast: Word('вырядил', 1),
  femininePast: Word('вырядила', 1),
  neuterPast: Word('вырядило', 1),
  pluralPast: Word('вырядили', 1),
  imperativeInformal: Word('выряди', 1),
  imperativeFormal: Word('вырядите', 1),
  imperfect: [],
};

perfectVerbs.set(вырядить.name.text, вырядить);

export { вырядить };