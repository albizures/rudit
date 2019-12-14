import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетягивать: PerfectVerb = {
  name: Word('перетягивать', 5),
  singular1stPerson: Word('перетягиваю', 5),
  singular2ndPerson: Word('перетягиваешь', 5),
  singular3rdPerson: Word('перетягивает', 5),
  plural1stPerson: Word('перетягиваем', 5),
  plural2ndPerson: Word('перетягиваете', 5),
  plural3rdPerson: Word('перетягивают', 5),
  masculinePast: Word('перетягивал', 5),
  femininePast: Word('перетягивала', 5),
  neuterPast: Word('перетягивало', 5),
  pluralPast: Word('перетягивали', 5),
  imperativeInformal: Word('перетягивай', 5),
  imperativeFormal: Word('перетягивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перетягивать.name.text, перетягивать);

export { перетягивать };