import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынашивать: PerfectVerb = {
  name: Word('вынашивать', 3),
  singular1stPerson: Word('вынашиваю', 3),
  singular2ndPerson: Word('вынашиваешь', 3),
  singular3rdPerson: Word('вынашивает', 3),
  plural1stPerson: Word('вынашиваем', 3),
  plural2ndPerson: Word('вынашиваете', 3),
  plural3rdPerson: Word('вынашивают', 3),
  masculinePast: Word('вынашивал', 3),
  femininePast: Word('вынашивала', 3),
  neuterPast: Word('вынашивало', 3),
  pluralPast: Word('вынашивали', 3),
  imperativeInformal: Word('вынашивай', 3),
  imperativeFormal: Word('вынашивайте', 3),
  imperfect: ['выносить'],
};

perfectVerbs.set(вынашивать.name.text, вынашивать);

export { вынашивать };