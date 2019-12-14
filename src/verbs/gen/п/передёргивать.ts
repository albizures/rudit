import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передёргивать: PerfectVerb = {
  name: Word('передёргивать', 10),
  singular1stPerson: Word('передёргиваю', 10),
  singular2ndPerson: Word('передёргиваешь', 10),
  singular3rdPerson: Word('передёргивает', 10),
  plural1stPerson: Word('передёргиваем', 10),
  plural2ndPerson: Word('передёргиваете', 10),
  plural3rdPerson: Word('передёргивают', 10),
  masculinePast: Word('передёргивал', 10),
  femininePast: Word('передёргивала', 10),
  neuterPast: Word('передёргивало', 10),
  pluralPast: Word('передёргивали', 10),
  imperativeInformal: Word('передёргивай', 10),
  imperativeFormal: Word('передёргивайте', 10),
  imperfect: [],
};

perfectVerbs.set(передёргивать.name.text, передёргивать);

export { передёргивать };