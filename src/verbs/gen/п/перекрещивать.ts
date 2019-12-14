import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрещивать: PerfectVerb = {
  name: Word('перекрещивать', 6),
  singular1stPerson: Word('перекрещиваю', 6),
  singular2ndPerson: Word('перекрещиваешь', 6),
  singular3rdPerson: Word('перекрещивает', 6),
  plural1stPerson: Word('перекрещиваем', 6),
  plural2ndPerson: Word('перекрещиваете', 6),
  plural3rdPerson: Word('перекрещивают', 6),
  masculinePast: Word('перекрещивал', 6),
  femininePast: Word('перекрещивала', 6),
  neuterPast: Word('перекрещивало', 6),
  pluralPast: Word('перекрещивали', 6),
  imperativeInformal: Word('перекрещивай', 6),
  imperativeFormal: Word('перекрещивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перекрещивать.name.text, перекрещивать);

export { перекрещивать };