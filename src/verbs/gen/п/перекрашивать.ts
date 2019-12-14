import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрашивать: PerfectVerb = {
  name: Word('перекрашивать', 6),
  singular1stPerson: Word('перекрашиваю', 6),
  singular2ndPerson: Word('перекрашиваешь', 6),
  singular3rdPerson: Word('перекрашивает', 6),
  plural1stPerson: Word('перекрашиваем', 6),
  plural2ndPerson: Word('перекрашиваете', 6),
  plural3rdPerson: Word('перекрашивают', 6),
  masculinePast: Word('перекрашивал', 6),
  femininePast: Word('перекрашивала', 6),
  neuterPast: Word('перекрашивало', 6),
  pluralPast: Word('перекрашивали', 6),
  imperativeInformal: Word('перекрашивай', 6),
  imperativeFormal: Word('перекрашивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перекрашивать.name.text, перекрашивать);

export { перекрашивать };