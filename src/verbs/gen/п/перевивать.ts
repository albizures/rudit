import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевивать: PerfectVerb = {
  name: Word('перевивать', 7),
  singular1stPerson: Word('перевиваю', 7),
  singular2ndPerson: Word('перевиваешь', 7),
  singular3rdPerson: Word('перевивает', 7),
  plural1stPerson: Word('перевиваем', 7),
  plural2ndPerson: Word('перевиваете', 7),
  plural3rdPerson: Word('перевивают', 7),
  masculinePast: Word('перевивал', 7),
  femininePast: Word('перевивала', 7),
  neuterPast: Word('перевивало', 7),
  pluralPast: Word('перевивали', 7),
  imperativeInformal: Word('перевивай', 7),
  imperativeFormal: Word('перевивайте', 7),
  imperfect: [],
};

perfectVerbs.set(перевивать.name.text, перевивать);

export { перевивать };