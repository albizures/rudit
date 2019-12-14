import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сграбить: PerfectVerb = {
  name: Word('сграбить', 3),
  singular1stPerson: Word('сграблю', 3),
  singular2ndPerson: Word('сграбишь', 3),
  singular3rdPerson: Word('сграбит', 3),
  plural1stPerson: Word('сграбим', 3),
  plural2ndPerson: Word('сграбите', 3),
  plural3rdPerson: Word('сграбят', 3),
  masculinePast: Word('сграбил', 3),
  femininePast: Word('сграбила', 3),
  neuterPast: Word('сграбило', 3),
  pluralPast: Word('сграбили', 3),
  imperativeInformal: Word('сграбь', 3),
  imperativeFormal: Word('сграбьте', 3),
  imperfect: [],
};

perfectVerbs.set(сграбить.name.text, сграбить);

export { сграбить };