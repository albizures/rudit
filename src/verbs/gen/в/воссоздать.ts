import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоздать: PerfectVerb = {
  name: Word('воссоздать', 7),
  singular1stPerson: Word('воссоздам', 7),
  singular2ndPerson: Word('воссоздашь', 7),
  singular3rdPerson: Word('воссоздаст', 7),
  plural1stPerson: Word('воссоздадим', 9),
  plural2ndPerson: Word('воссоздадите', 9),
  plural3rdPerson: Word('воссоздадут', 9),
  masculinePast: Word('воссоздал', 7),
  femininePast: Word('воссоздала', 9),
  neuterPast: Word('воссоздало,воссоздало'', 7),
  pluralPast: Word('воссоздали', 7),
  imperativeInformal: Word('воссоздай', 7),
  imperativeFormal: Word('воссоздайте', 7),
  imperfect: ['воссоздавать'],
};

perfectVerbs.set(воссоздать.name.text, воссоздать);

export { воссоздать };