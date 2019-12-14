import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебивать: PerfectVerb = {
  name: Word('перебивать', 7),
  singular1stPerson: Word('перебиваю', 7),
  singular2ndPerson: Word('перебиваешь', 7),
  singular3rdPerson: Word('перебивает', 7),
  plural1stPerson: Word('перебиваем', 7),
  plural2ndPerson: Word('перебиваете', 7),
  plural3rdPerson: Word('перебивают', 7),
  masculinePast: Word('перебивал', 7),
  femininePast: Word('перебивала', 7),
  neuterPast: Word('перебивало', 7),
  pluralPast: Word('перебивали', 7),
  imperativeInformal: Word('перебивай', 7),
  imperativeFormal: Word('перебивайте', 7),
  imperfect: ['перебить'],
};

perfectVerbs.set(перебивать.name.text, перебивать);

export { перебивать };