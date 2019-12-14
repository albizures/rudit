import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настраивать: PerfectVerb = {
  name: Word('настраивать', 5),
  singular1stPerson: Word('настраиваю', 5),
  singular2ndPerson: Word('настраиваешь', 5),
  singular3rdPerson: Word('настраивает', 5),
  plural1stPerson: Word('настраиваем', 5),
  plural2ndPerson: Word('настраиваете', 5),
  plural3rdPerson: Word('настраивают', 5),
  masculinePast: Word('настраивал', 5),
  femininePast: Word('настраивала', 5),
  neuterPast: Word('настраивало', 5),
  pluralPast: Word('настраивали', 5),
  imperativeInformal: Word('настраивай', 5),
  imperativeFormal: Word('настраивайте', 5),
  imperfect: ['настроить'],
};

perfectVerbs.set(настраивать.name.text, настраивать);

export { настраивать };