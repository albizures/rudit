import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограничивать: PerfectVerb = {
  name: Word('ограничивать', 5),
  singular1stPerson: Word('ограничиваю', 5),
  singular2ndPerson: Word('ограничиваешь', 5),
  singular3rdPerson: Word('ограничивает', 5),
  plural1stPerson: Word('ограничиваем', 5),
  plural2ndPerson: Word('ограничиваете', 5),
  plural3rdPerson: Word('ограничивают', 5),
  masculinePast: Word('ограничивал', 5),
  femininePast: Word('ограничивала', 5),
  neuterPast: Word('ограничивало', 5),
  pluralPast: Word('ограничивали', 5),
  imperativeInformal: Word('ограничивай', 5),
  imperativeFormal: Word('ограничивайте', 5),
  imperfect: ['ограничить'],
};

perfectVerbs.set(ограничивать.name.text, ограничивать);

export { ограничивать };