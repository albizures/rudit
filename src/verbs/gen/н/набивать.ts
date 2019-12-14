import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набивать: PerfectVerb = {
  name: Word('набивать', 5),
  singular1stPerson: Word('набиваю', 5),
  singular2ndPerson: Word('набиваешь', 5),
  singular3rdPerson: Word('набивает', 5),
  plural1stPerson: Word('набиваем', 5),
  plural2ndPerson: Word('набиваете', 5),
  plural3rdPerson: Word('набивают', 5),
  masculinePast: Word('набивал', 5),
  femininePast: Word('набивала', 5),
  neuterPast: Word('набивало', 5),
  pluralPast: Word('набивали', 5),
  imperativeInformal: Word('набивай', 5),
  imperativeFormal: Word('набивайте', 5),
  imperfect: [],
};

perfectVerbs.set(набивать.name.text, набивать);

export { набивать };