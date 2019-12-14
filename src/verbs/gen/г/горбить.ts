import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горбить: PerfectVerb = {
  name: Word('горбить', 1),
  singular1stPerson: Word('горблю', 1),
  singular2ndPerson: Word('горбишь', 1),
  singular3rdPerson: Word('горбит', 1),
  plural1stPerson: Word('горбим', 1),
  plural2ndPerson: Word('горбите', 1),
  plural3rdPerson: Word('горбят', 1),
  masculinePast: Word('горбил', 1),
  femininePast: Word('горбила', 1),
  neuterPast: Word('горбило', 1),
  pluralPast: Word('горбили', 1),
  imperativeInformal: Word('горби//го'рбь', 1),
  imperativeFormal: Word('горбите//го'рбьте', 1),
  imperfect: [],
};

perfectVerbs.set(горбить.name.text, горбить);

export { горбить };