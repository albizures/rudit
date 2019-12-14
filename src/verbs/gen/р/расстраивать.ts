import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстраивать: PerfectVerb = {
  name: Word('расстраивать', 6),
  singular1stPerson: Word('расстраиваю', 6),
  singular2ndPerson: Word('расстраиваешь', 6),
  singular3rdPerson: Word('расстраивает', 6),
  plural1stPerson: Word('расстраиваем', 6),
  plural2ndPerson: Word('расстраиваете', 6),
  plural3rdPerson: Word('расстраивают', 6),
  masculinePast: Word('расстраивал', 6),
  femininePast: Word('расстраивала', 6),
  neuterPast: Word('расстраивало', 6),
  pluralPast: Word('расстраивали', 6),
  imperativeInformal: Word('расстраивай', 6),
  imperativeFormal: Word('расстраивайте', 6),
  imperfect: ['расстроить'],
};

perfectVerbs.set(расстраивать.name.text, расстраивать);

export { расстраивать };