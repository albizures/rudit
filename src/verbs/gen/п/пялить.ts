import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пялить: PerfectVerb = {
  name: Word('пялить', 1),
  singular1stPerson: Word('пялю', 1),
  singular2ndPerson: Word('пялишь', 1),
  singular3rdPerson: Word('пялит', 1),
  plural1stPerson: Word('пялим', 1),
  plural2ndPerson: Word('пялите', 1),
  plural3rdPerson: Word('пялят', 1),
  masculinePast: Word('пялил', 1),
  femininePast: Word('пялила', 1),
  neuterPast: Word('пялило', 1),
  pluralPast: Word('пялили', 1),
  imperativeInformal: Word('пяль', 1),
  imperativeFormal: Word('пяльте', 1),
  imperfect: [],
};

perfectVerbs.set(пялить.name.text, пялить);

export { пялить };