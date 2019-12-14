import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезванивать: PerfectVerb = {
  name: Word('перезванивать', 6),
  singular1stPerson: Word('перезваниваю', 6),
  singular2ndPerson: Word('перезваниваешь', 6),
  singular3rdPerson: Word('перезванивает', 6),
  plural1stPerson: Word('перезваниваем', 6),
  plural2ndPerson: Word('перезваниваете', 6),
  plural3rdPerson: Word('перезванивают', 6),
  masculinePast: Word('перезванивал', 6),
  femininePast: Word('перезванивала', 6),
  neuterPast: Word('перезванивало', 6),
  pluralPast: Word('перезванивали', 6),
  imperativeInformal: Word('перезванивай', 6),
  imperativeFormal: Word('перезванивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перезванивать.name.text, перезванивать);

export { перезванивать };