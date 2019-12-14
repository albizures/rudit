import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцениить: PerfectVerb = {
  name: Word('оцениить', 5),
  singular1stPerson: Word('оцению', 5),
  singular2ndPerson: Word('оцениишь', 2),
  singular3rdPerson: Word('оцениит', 2),
  plural1stPerson: Word('оцениим', 2),
  plural2ndPerson: Word('оцениите', 2),
  plural3rdPerson: Word('оценият', 2),
  masculinePast: Word('оцениил', 5),
  femininePast: Word('оцениила', 5),
  neuterPast: Word('оцениило', 5),
  pluralPast: Word('оцениили', 5),
  imperativeInformal: Word('оцении', 5),
  imperativeFormal: Word('оцениите', 5),
  imperfect: ['оценивать'],
};

perfectVerbs.set(оцениить.name.text, оцениить);

export { оцениить };