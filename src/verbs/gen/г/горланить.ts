import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горланить: PerfectVerb = {
  name: Word('горланить', 4),
  singular1stPerson: Word('горланю', 4),
  singular2ndPerson: Word('горланишь', 4),
  singular3rdPerson: Word('горланит', 4),
  plural1stPerson: Word('горланим', 4),
  plural2ndPerson: Word('горланите', 4),
  plural3rdPerson: Word('горланят', 4),
  masculinePast: Word('горланил', 4),
  femininePast: Word('горланила', 4),
  neuterPast: Word('горланило', 4),
  pluralPast: Word('горланили', 4),
  imperativeInformal: Word('горлань', 4),
  imperativeFormal: Word('горланьте', 4),
  imperfect: [],
};

perfectVerbs.set(горланить.name.text, горланить);

export { горланить };