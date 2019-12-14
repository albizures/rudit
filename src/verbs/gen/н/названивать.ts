import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const названивать: PerfectVerb = {
  name: Word('названивать', 4),
  singular1stPerson: Word('названиваю', 4),
  singular2ndPerson: Word('названиваешь', 4),
  singular3rdPerson: Word('названивает', 4),
  plural1stPerson: Word('названиваем', 4),
  plural2ndPerson: Word('названиваете', 4),
  plural3rdPerson: Word('названивают', 4),
  masculinePast: Word('названивал', 4),
  femininePast: Word('названивала', 4),
  neuterPast: Word('названивало', 4),
  pluralPast: Word('названивали', 4),
  imperativeInformal: Word('названивай', 4),
  imperativeFormal: Word('названивайте', 4),
  imperfect: [],
};

perfectVerbs.set(названивать.name.text, названивать);

export { названивать };