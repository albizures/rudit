import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепаивать: PerfectVerb = {
  name: Word('перепаивать', 5),
  singular1stPerson: Word('перепаиваю', 5),
  singular2ndPerson: Word('перепаиваешь', 5),
  singular3rdPerson: Word('перепаивает', 5),
  plural1stPerson: Word('перепаиваем', 5),
  plural2ndPerson: Word('перепаиваете', 5),
  plural3rdPerson: Word('перепаивают', 5),
  masculinePast: Word('перепаивал', 5),
  femininePast: Word('перепаивала', 5),
  neuterPast: Word('перепаивало', 5),
  pluralPast: Word('перепаивали', 5),
  imperativeInformal: Word('перепаивай', 5),
  imperativeFormal: Word('перепаивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перепаивать.name.text, перепаивать);

export { перепаивать };