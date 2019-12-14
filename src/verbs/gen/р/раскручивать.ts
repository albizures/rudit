import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскручивать: PerfectVerb = {
  name: Word('раскручивать', 5),
  singular1stPerson: Word('раскручиваю', 5),
  singular2ndPerson: Word('раскручиваешь', 5),
  singular3rdPerson: Word('раскручивает', 5),
  plural1stPerson: Word('раскручиваем', 5),
  plural2ndPerson: Word('раскручиваете', 5),
  plural3rdPerson: Word('раскручивают', 5),
  masculinePast: Word('раскручивал', 5),
  femininePast: Word('раскручивала', 5),
  neuterPast: Word('раскручивало', 5),
  pluralPast: Word('раскручивали', 5),
  imperativeInformal: Word('раскручивай', 5),
  imperativeFormal: Word('раскручивайте', 5),
  imperfect: ['раскрутить'],
};

perfectVerbs.set(раскручивать.name.text, раскручивать);

export { раскручивать };