import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздыбить: PerfectVerb = {
  name: Word('вздыбить', 3),
  singular1stPerson: Word('вздыблю', 3),
  singular2ndPerson: Word('вздыбишь', 3),
  singular3rdPerson: Word('вздыбит', 3),
  plural1stPerson: Word('вздыбим', 3),
  plural2ndPerson: Word('вздыбите', 3),
  plural3rdPerson: Word('вздыбят', 3),
  masculinePast: Word('вздыбил', 3),
  femininePast: Word('вздыбила', 3),
  neuterPast: Word('вздыбило', 3),
  pluralPast: Word('вздыбили', 3),
  imperativeInformal: Word('вздыбь', 3),
  imperativeFormal: Word('вздыбьте', 3),
  imperfect: [],
};

perfectVerbs.set(вздыбить.name.text, вздыбить);

export { вздыбить };