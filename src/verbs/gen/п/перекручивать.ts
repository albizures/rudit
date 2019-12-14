import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекручивать: PerfectVerb = {
  name: Word('перекручивать', 6),
  singular1stPerson: Word('перекручиваю', 6),
  singular2ndPerson: Word('перекручиваешь', 6),
  singular3rdPerson: Word('перекручивает', 6),
  plural1stPerson: Word('перекручиваем', 6),
  plural2ndPerson: Word('перекручиваете', 6),
  plural3rdPerson: Word('перекручивают', 6),
  masculinePast: Word('перекручивал', 6),
  femininePast: Word('перекручивала', 6),
  neuterPast: Word('перекручивало', 6),
  pluralPast: Word('перекручивали', 6),
  imperativeInformal: Word('перекручивай', 6),
  imperativeFormal: Word('перекручивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перекручивать.name.text, перекручивать);

export { перекручивать };