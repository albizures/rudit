import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просвечивать: PerfectVerb = {
  name: Word('просвечивать', 5),
  singular1stPerson: Word('просвечиваю', 5),
  singular2ndPerson: Word('просвечиваешь', 5),
  singular3rdPerson: Word('просвечивает', 5),
  plural1stPerson: Word('просвечиваем', 5),
  plural2ndPerson: Word('просвечиваете', 5),
  plural3rdPerson: Word('просвечивают', 5),
  masculinePast: Word('просвечивал', 5),
  femininePast: Word('просвечивала', 5),
  neuterPast: Word('просвечивало', 5),
  pluralPast: Word('просвечивали', 5),
  imperativeInformal: Word('просвечивай', 5),
  imperativeFormal: Word('просвечивайте', 5),
  imperfect: ['просветить'],
};

perfectVerbs.set(просвечивать.name.text, просвечивать);

export { просвечивать };