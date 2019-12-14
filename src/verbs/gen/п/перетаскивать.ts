import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетаскивать: PerfectVerb = {
  name: Word('перетаскивать', 5),
  singular1stPerson: Word('перетаскиваю', 5),
  singular2ndPerson: Word('перетаскиваешь', 5),
  singular3rdPerson: Word('перетаскивает', 5),
  plural1stPerson: Word('перетаскиваем', 5),
  plural2ndPerson: Word('перетаскиваете', 5),
  plural3rdPerson: Word('перетаскивают', 5),
  masculinePast: Word('перетаскивал', 5),
  femininePast: Word('перетаскивала', 5),
  neuterPast: Word('перетаскивало', 5),
  pluralPast: Word('перетаскивали', 5),
  imperativeInformal: Word('перетаскивай', 5),
  imperativeFormal: Word('перетаскивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перетаскивать.name.text, перетаскивать);

export { перетаскивать };