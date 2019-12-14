import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплющивать: PerfectVerb = {
  name: Word('приплющивать', 5),
  singular1stPerson: Word('приплющиваю', 5),
  singular2ndPerson: Word('приплющиваешь', 5),
  singular3rdPerson: Word('приплющивает', 5),
  plural1stPerson: Word('приплющиваем', 5),
  plural2ndPerson: Word('приплющиваете', 5),
  plural3rdPerson: Word('приплющивают', 5),
  masculinePast: Word('приплющивал', 5),
  femininePast: Word('приплющивала', 5),
  neuterPast: Word('приплющивало', 5),
  pluralPast: Word('приплющивали', 5),
  imperativeInformal: Word('приплющивай', 5),
  imperativeFormal: Word('приплющивайте', 5),
  imperfect: [],
};

perfectVerbs.set(приплющивать.name.text, приплющивать);

export { приплющивать };