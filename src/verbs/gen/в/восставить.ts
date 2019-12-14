import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восставить: PerfectVerb = {
  name: Word('восставить', 5),
  singular1stPerson: Word('восставлю', 5),
  singular2ndPerson: Word('восставишь', 5),
  singular3rdPerson: Word('восставит', 5),
  plural1stPerson: Word('восставим', 5),
  plural2ndPerson: Word('восставите', 5),
  plural3rdPerson: Word('восставят', 5),
  masculinePast: Word('восставил', 5),
  femininePast: Word('восставила', 5),
  neuterPast: Word('восставило', 5),
  pluralPast: Word('восставили', 5),
  imperativeInformal: Word('восставь', 5),
  imperativeFormal: Word('восставьте', 5),
  imperfect: [],
};

perfectVerbs.set(восставить.name.text, восставить);

export { восставить };