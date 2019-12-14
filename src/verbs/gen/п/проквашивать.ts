import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проквашивать: PerfectVerb = {
  name: Word('проквашивать', 5),
  singular1stPerson: Word('проквашиваю', 5),
  singular2ndPerson: Word('проквашиваешь', 5),
  singular3rdPerson: Word('проквашивает', 5),
  plural1stPerson: Word('проквашиваем', 5),
  plural2ndPerson: Word('проквашиваете', 5),
  plural3rdPerson: Word('проквашивают', 5),
  masculinePast: Word('проквашивал', 5),
  femininePast: Word('проквашивала', 5),
  neuterPast: Word('проквашивало', 5),
  pluralPast: Word('проквашивали', 5),
  imperativeInformal: Word('проквашивай', 5),
  imperativeFormal: Word('проквашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(проквашивать.name.text, проквашивать);

export { проквашивать };