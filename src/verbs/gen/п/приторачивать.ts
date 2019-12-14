import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приторачивать: PerfectVerb = {
  name: Word('приторачивать', 6),
  singular1stPerson: Word('приторачиваю', 6),
  singular2ndPerson: Word('приторачиваешь', 6),
  singular3rdPerson: Word('приторачивает', 6),
  plural1stPerson: Word('приторачиваем', 6),
  plural2ndPerson: Word('приторачиваете', 6),
  plural3rdPerson: Word('приторачивают', 6),
  masculinePast: Word('приторачивал', 6),
  femininePast: Word('приторачивала', 6),
  neuterPast: Word('приторачивало', 6),
  pluralPast: Word('приторачивали', 6),
  imperativeInformal: Word('приторачивай', 6),
  imperativeFormal: Word('приторачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(приторачивать.name.text, приторачивать);

export { приторачивать };