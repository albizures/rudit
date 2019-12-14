import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попивать: PerfectVerb = {
  name: Word('попивать', 5),
  singular1stPerson: Word('попиваю', 5),
  singular2ndPerson: Word('попиваешь', 5),
  singular3rdPerson: Word('попивает', 5),
  plural1stPerson: Word('попиваем', 5),
  plural2ndPerson: Word('попиваете', 5),
  plural3rdPerson: Word('попивают', 5),
  masculinePast: Word('попивал', 5),
  femininePast: Word('попивала', 5),
  neuterPast: Word('попивало', 5),
  pluralPast: Word('попивали', 5),
  imperativeInformal: Word('попивай', 5),
  imperativeFormal: Word('попивайте', 5),
  imperfect: [],
};

perfectVerbs.set(попивать.name.text, попивать);

export { попивать };