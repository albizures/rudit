import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переиздать: PerfectVerb = {
  name: Word('переиздать', 7),
  singular1stPerson: Word('переиздам', 7),
  singular2ndPerson: Word('переиздашь', 7),
  singular3rdPerson: Word('переиздаст', 7),
  plural1stPerson: Word('переиздадим', 9),
  plural2ndPerson: Word('переиздадите', 9),
  plural3rdPerson: Word('переиздадут', 9),
  masculinePast: Word('переиздал', 7),
  femininePast: Word('переиздала', 9),
  neuterPast: Word('переиздало', 7),
  pluralPast: Word('переиздали', 7),
  imperativeInformal: Word('переиздай', 7),
  imperativeFormal: Word('переиздайте', 7),
  imperfect: [],
};

perfectVerbs.set(переиздать.name.text, переиздать);

export { переиздать };