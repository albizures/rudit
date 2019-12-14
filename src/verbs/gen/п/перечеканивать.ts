import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перечеканивать: PerfectVerb = {
  name: Word('перечеканивать', 7),
  singular1stPerson: Word('перечеканиваю', 7),
  singular2ndPerson: Word('перечеканиваешь', 7),
  singular3rdPerson: Word('перечеканивает', 7),
  plural1stPerson: Word('перечеканиваем', 7),
  plural2ndPerson: Word('перечеканиваете', 7),
  plural3rdPerson: Word('перечеканивают', 7),
  masculinePast: Word('перечеканивал', 7),
  femininePast: Word('перечеканивала', 7),
  neuterPast: Word('перечеканивало', 7),
  pluralPast: Word('перечеканивали', 7),
  imperativeInformal: Word('перечеканивай', 7),
  imperativeFormal: Word('перечеканивайте', 7),
  imperfect: [],
};

perfectVerbs.set(перечеканивать.name.text, перечеканивать);

export { перечеканивать };