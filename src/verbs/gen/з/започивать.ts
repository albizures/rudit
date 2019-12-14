import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const започивать: PerfectVerb = {
  name: Word('започивать', 7),
  singular1stPerson: Word('започиваю', 7),
  singular2ndPerson: Word('започиваешь', 7),
  singular3rdPerson: Word('започивает', 7),
  plural1stPerson: Word('започиваем', 7),
  plural2ndPerson: Word('започиваете', 7),
  plural3rdPerson: Word('започивают', 7),
  masculinePast: Word('започивал', 7),
  femininePast: Word('започивала', 7),
  neuterPast: Word('започивало', 7),
  pluralPast: Word('започивали', 7),
  imperativeInformal: Word('започивай', 7),
  imperativeFormal: Word('започивайте', 7),
  imperfect: [],
};

perfectVerbs.set(започивать.name.text, започивать);

export { започивать };