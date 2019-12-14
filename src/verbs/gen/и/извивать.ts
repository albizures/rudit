import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извивать: PerfectVerb = {
  name: Word('извивать', 5),
  singular1stPerson: Word('извиваю', 5),
  singular2ndPerson: Word('извиваешь', 5),
  singular3rdPerson: Word('извивает', 5),
  plural1stPerson: Word('извиваем', 5),
  plural2ndPerson: Word('извиваете', 5),
  plural3rdPerson: Word('извивают', 5),
  masculinePast: Word('извивал', 5),
  femininePast: Word('извивала', 5),
  neuterPast: Word('извивало', 5),
  pluralPast: Word('извивали', 5),
  imperativeInformal: Word('извивай', 5),
  imperativeFormal: Word('извивайте', 5),
  imperfect: [],
};

perfectVerbs.set(извивать.name.text, извивать);

export { извивать };