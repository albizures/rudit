import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристёгивать: PerfectVerb = {
  name: Word('пристёгивать', 5),
  singular1stPerson: Word('пристёгиваю', 5),
  singular2ndPerson: Word('пристёгиваешь', 5),
  singular3rdPerson: Word('пристёгивает', 5),
  plural1stPerson: Word('пристёгиваем', 5),
  plural2ndPerson: Word('пристёгиваете', 5),
  plural3rdPerson: Word('пристёгивают', 5),
  masculinePast: Word('пристёгивал', 5),
  femininePast: Word('пристёгивала', 5),
  neuterPast: Word('пристёгивало', 5),
  pluralPast: Word('пристёгивали', 5),
  imperativeInformal: Word('пристёгивай', 5),
  imperativeFormal: Word('пристёгивайте', 5),
  imperfect: [],
};

perfectVerbs.set(пристёгивать.name.text, пристёгивать);

export { пристёгивать };