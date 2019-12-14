import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрашивать: PerfectVerb = {
  name: Word('спрашивать', 3),
  singular1stPerson: Word('спрашиваю', 3),
  singular2ndPerson: Word('спрашиваешь', 3),
  singular3rdPerson: Word('спрашивает', 3),
  plural1stPerson: Word('спрашиваем', 3),
  plural2ndPerson: Word('спрашиваете', 3),
  plural3rdPerson: Word('спрашивают', 3),
  masculinePast: Word('спрашивал', 3),
  femininePast: Word('спрашивала', 3),
  neuterPast: Word('спрашивало', 3),
  pluralPast: Word('спрашивали', 3),
  imperativeInformal: Word('спрашивай', 3),
  imperativeFormal: Word('спрашивайте', 3),
  imperfect: ['спросить'],
};

perfectVerbs.set(спрашивать.name.text, спрашивать);

export { спрашивать };