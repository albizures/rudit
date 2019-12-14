import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обыскивать: PerfectVerb = {
  name: Word('обыскивать', 2),
  singular1stPerson: Word('обыскиваю', 2),
  singular2ndPerson: Word('обыскиваешь', 2),
  singular3rdPerson: Word('обыскивает', 2),
  plural1stPerson: Word('обыскиваем', 2),
  plural2ndPerson: Word('обыскиваете', 2),
  plural3rdPerson: Word('обыскивают', 2),
  masculinePast: Word('обыскивал', 2),
  femininePast: Word('обыскивала', 2),
  neuterPast: Word('обыскивало', 2),
  pluralPast: Word('обыскивали', 2),
  imperativeInformal: Word('обыскивай', 2),
  imperativeFormal: Word('обыскивайте', 2),
  imperfect: [],
};

perfectVerbs.set(обыскивать.name.text, обыскивать);

export { обыскивать };