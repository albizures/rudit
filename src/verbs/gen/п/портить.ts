import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const портить: PerfectVerb = {
  name: Word('портить', 1),
  singular1stPerson: Word('порчу', 1),
  singular2ndPerson: Word('портишь', 1),
  singular3rdPerson: Word('портит', 1),
  plural1stPerson: Word('портим', 1),
  plural2ndPerson: Word('портите', 1),
  plural3rdPerson: Word('портят', 1),
  masculinePast: Word('портил', 1),
  femininePast: Word('портила', 1),
  neuterPast: Word('портило', 1),
  pluralPast: Word('портили', 1),
  imperativeInformal: Word('порти', 1),
  imperativeFormal: Word('портите', 1),
  imperfect: [],
};

perfectVerbs.set(портить.name.text, портить);

export { портить };