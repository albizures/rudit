import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассредоточивать: PerfectVerb = {
  name: Word('рассредоточивать', 9),
  singular1stPerson: Word('рассредоточиваю', 9),
  singular2ndPerson: Word('рассредоточиваешь', 9),
  singular3rdPerson: Word('рассредоточивает', 9),
  plural1stPerson: Word('рассредоточиваем', 9),
  plural2ndPerson: Word('рассредоточиваете', 9),
  plural3rdPerson: Word('рассредоточивают', 9),
  masculinePast: Word('рассредоточивал', 9),
  femininePast: Word('рассредоточивала', 9),
  neuterPast: Word('рассредоточивало', 9),
  pluralPast: Word('рассредоточивали', 9),
  imperativeInformal: Word('рассредоточивай', 9),
  imperativeFormal: Word('рассредоточивайте', 9),
  imperfect: [],
};

perfectVerbs.set(рассредоточивать.name.text, рассредоточивать);

export { рассредоточивать };