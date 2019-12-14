import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассекречивать: PerfectVerb = {
  name: Word('рассекречивать', 7),
  singular1stPerson: Word('рассекречиваю', 7),
  singular2ndPerson: Word('рассекречиваешь', 7),
  singular3rdPerson: Word('рассекречивает', 7),
  plural1stPerson: Word('рассекречиваем', 7),
  plural2ndPerson: Word('рассекречиваете', 7),
  plural3rdPerson: Word('рассекречивают', 7),
  masculinePast: Word('рассекречивал', 7),
  femininePast: Word('рассекречивала', 7),
  neuterPast: Word('рассекречивало', 7),
  pluralPast: Word('рассекречивали', 7),
  imperativeInformal: Word('рассекречивай', 7),
  imperativeFormal: Word('рассекречивайте', 7),
  imperfect: [],
};

perfectVerbs.set(рассекречивать.name.text, рассекречивать);

export { рассекречивать };