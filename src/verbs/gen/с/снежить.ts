import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снежить: PerfectVerb = {
  name: Word('снежить', 4),
  singular1stPerson: Word('снежу', 4),
  singular2ndPerson: Word('снежишь', 4),
  singular3rdPerson: Word('снежит', 4),
  plural1stPerson: Word('снежим', 4),
  plural2ndPerson: Word('снежите', 4),
  plural3rdPerson: Word('снежат', 4),
  masculinePast: Word('снежил', 4),
  femininePast: Word('снежила', 4),
  neuterPast: Word('снежило', 4),
  pluralPast: Word('снежили', 4),
  imperativeInformal: Word('снежи', 4),
  imperativeFormal: Word('снежите', 4),
  imperfect: [],
};

perfectVerbs.set(снежить.name.text, снежить);

export { снежить };