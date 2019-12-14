import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встряхивать: PerfectVerb = {
  name: Word('встряхивать', 4),
  singular1stPerson: Word('встряхиваю', 4),
  singular2ndPerson: Word('встряхиваешь', 4),
  singular3rdPerson: Word('встряхивает', 4),
  plural1stPerson: Word('встряхиваем', 4),
  plural2ndPerson: Word('встряхиваете', 4),
  plural3rdPerson: Word('встряхивают', 4),
  masculinePast: Word('встряхивал', 4),
  femininePast: Word('встряхивала', 4),
  neuterPast: Word('встряхивало', 4),
  pluralPast: Word('встряхивали', 4),
  imperativeInformal: Word('встряхивай', 4),
  imperativeFormal: Word('встряхивайте', 4),
  imperfect: [],
};

perfectVerbs.set(встряхивать.name.text, встряхивать);

export { встряхивать };