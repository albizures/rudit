import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передёргивать: PerfectVerb = {
  name: Word('передёргивать', 5),
  singular1stPerson: Word('передёргиваю', 5),
  singular2ndPerson: Word('передёргиваешь', 5),
  singular3rdPerson: Word('передёргивает', 5),
  plural1stPerson: Word('передёргиваем', 5),
  plural2ndPerson: Word('передёргиваете', 5),
  plural3rdPerson: Word('передёргивают', 5),
  masculinePast: Word('передёргивал', 5),
  femininePast: Word('передёргивала', 5),
  neuterPast: Word('передёргивало', 5),
  pluralPast: Word('передёргивали', 5),
  imperativeInformal: Word('передёргивай', 5),
  imperativeFormal: Word('передёргивайте', 5),
  imperfect: [],
};

perfectVerbs.set(передёргивать.name.text, передёргивать);

export { передёргивать };