import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекраивать: PerfectVerb = {
  name: Word('перекраивать', 6),
  singular1stPerson: Word('перекраиваю', 6),
  singular2ndPerson: Word('перекраиваешь', 6),
  singular3rdPerson: Word('перекраивает', 6),
  plural1stPerson: Word('перекраиваем', 6),
  plural2ndPerson: Word('перекраиваете', 6),
  plural3rdPerson: Word('перекраивают', 6),
  masculinePast: Word('перекраивал', 6),
  femininePast: Word('перекраивала', 6),
  neuterPast: Word('перекраивало', 6),
  pluralPast: Word('перекраивали', 6),
  imperativeInformal: Word('перекраивай', 6),
  imperativeFormal: Word('перекраивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перекраивать.name.text, перекраивать);

export { перекраивать };