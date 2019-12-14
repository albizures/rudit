import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосредоточивать: PerfectVerb = {
  name: Word('сосредоточивать', 8),
  singular1stPerson: Word('сосредоточиваю', 8),
  singular2ndPerson: Word('сосредоточиваешь', 8),
  singular3rdPerson: Word('сосредоточивает', 8),
  plural1stPerson: Word('сосредоточиваем', 8),
  plural2ndPerson: Word('сосредоточиваете', 8),
  plural3rdPerson: Word('сосредоточивают', 8),
  masculinePast: Word('сосредоточивал', 8),
  femininePast: Word('сосредоточивала', 8),
  neuterPast: Word('сосредоточивало', 8),
  pluralPast: Word('сосредоточивали', 8),
  imperativeInformal: Word('сосредоточивай', 8),
  imperativeFormal: Word('сосредоточивайте', 8),
  imperfect: [],
};

perfectVerbs.set(сосредоточивать.name.text, сосредоточивать);

export { сосредоточивать };