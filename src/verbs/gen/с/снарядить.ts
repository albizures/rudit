import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снарядить: PerfectVerb = {
  name: Word('снарядить', 6),
  singular1stPerson: Word('снаряжу', 6),
  singular2ndPerson: Word('снарядишь', 6),
  singular3rdPerson: Word('снарядит', 6),
  plural1stPerson: Word('снарядим', 6),
  plural2ndPerson: Word('снарядите', 6),
  plural3rdPerson: Word('снарядят', 6),
  masculinePast: Word('снарядил', 6),
  femininePast: Word('снарядила', 6),
  neuterPast: Word('снарядило', 6),
  pluralPast: Word('снарядили', 6),
  imperativeInformal: Word('снаряди', 6),
  imperativeFormal: Word('снарядите', 6),
  imperfect: ['снаряжать'],
};

perfectVerbs.set(снарядить.name.text, снарядить);

export { снарядить };