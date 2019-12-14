import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепахивать: PerfectVerb = {
  name: Word('перепахивать', 5),
  singular1stPerson: Word('перепахиваю', 5),
  singular2ndPerson: Word('перепахиваешь', 5),
  singular3rdPerson: Word('перепахивает', 5),
  plural1stPerson: Word('перепахиваем', 5),
  plural2ndPerson: Word('перепахиваете', 5),
  plural3rdPerson: Word('перепахивают', 5),
  masculinePast: Word('перепахивал', 5),
  femininePast: Word('перепахивала', 5),
  neuterPast: Word('перепахивало', 5),
  pluralPast: Word('перепахивали', 5),
  imperativeInformal: Word('перепахивай', 5),
  imperativeFormal: Word('перепахивайте', 5),
  imperfect: [],
};

perfectVerbs.set(перепахивать.name.text, перепахивать);

export { перепахивать };