import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втачивать: PerfectVerb = {
  name: Word('втачивать', 2),
  singular1stPerson: Word('втачиваю', 2),
  singular2ndPerson: Word('втачиваешь', 2),
  singular3rdPerson: Word('втачивает', 2),
  plural1stPerson: Word('втачиваем', 2),
  plural2ndPerson: Word('втачиваете', 2),
  plural3rdPerson: Word('втачивают', 2),
  masculinePast: Word('втачивал', 2),
  femininePast: Word('втачивала', 2),
  neuterPast: Word('втачивало', 2),
  pluralPast: Word('втачивали', 2),
  imperativeInformal: Word('втачивай', 2),
  imperativeFormal: Word('втачивайте', 2),
  imperfect: [],
};

perfectVerbs.set(втачивать.name.text, втачивать);

export { втачивать };