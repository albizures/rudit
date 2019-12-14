import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передать: PerfectVerb = {
  name: Word('передать', 5),
  singular1stPerson: Word('передам', 5),
  singular2ndPerson: Word('передашь', 5),
  singular3rdPerson: Word('передаст', 5),
  plural1stPerson: Word('передадим', 7),
  plural2ndPerson: Word('передадите', 7),
  plural3rdPerson: Word('передадут', 7),
  masculinePast: Word('передал', 5),
  femininePast: Word('передала', 7),
  neuterPast: Word('передало,передало'', 5),
  pluralPast: Word('передали', 5),
  imperativeInformal: Word('передай', 5),
  imperativeFormal: Word('передайте', 5),
  imperfect: ['передавать'],
};

perfectVerbs.set(передать.name.text, передать);

export { передать };