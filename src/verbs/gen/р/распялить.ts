import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распялить: PerfectVerb = {
  name: Word('распялить', 4),
  singular1stPerson: Word('распялю', 4),
  singular2ndPerson: Word('распялишь', 4),
  singular3rdPerson: Word('распялит', 4),
  plural1stPerson: Word('распялим', 4),
  plural2ndPerson: Word('распялите', 4),
  plural3rdPerson: Word('распялят', 4),
  masculinePast: Word('распялил', 4),
  femininePast: Word('распялила', 4),
  neuterPast: Word('распялило', 4),
  pluralPast: Word('распялили', 4),
  imperativeInformal: Word('распяль', 4),
  imperativeFormal: Word('распяльте', 4),
  imperfect: [],
};

perfectVerbs.set(распялить.name.text, распялить);

export { распялить };