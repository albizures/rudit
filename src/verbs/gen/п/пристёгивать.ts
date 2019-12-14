import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристёгивать: PerfectVerb = {
  name: Word('пристёгивать', 9),
  singular1stPerson: Word('пристёгиваю', 9),
  singular2ndPerson: Word('пристёгиваешь', 9),
  singular3rdPerson: Word('пристёгивает', 9),
  plural1stPerson: Word('пристёгиваем', 9),
  plural2ndPerson: Word('пристёгиваете', 9),
  plural3rdPerson: Word('пристёгивают', 9),
  masculinePast: Word('пристёгивал', 9),
  femininePast: Word('пристёгивала', 9),
  neuterPast: Word('пристёгивало', 9),
  pluralPast: Word('пристёгивали', 9),
  imperativeInformal: Word('пристёгивай', 9),
  imperativeFormal: Word('пристёгивайте', 9),
  imperfect: [],
};

perfectVerbs.set(пристёгивать.name.text, пристёгивать);

export { пристёгивать };