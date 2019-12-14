import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытеснить: PerfectVerb = {
  name: Word('вытеснить', 1),
  singular1stPerson: Word('вытесню', 1),
  singular2ndPerson: Word('вытеснишь', 1),
  singular3rdPerson: Word('вытеснит', 1),
  plural1stPerson: Word('вытесним', 1),
  plural2ndPerson: Word('вытесните', 1),
  plural3rdPerson: Word('вытеснят', 1),
  masculinePast: Word('вытеснил', 1),
  femininePast: Word('вытеснила', 1),
  neuterPast: Word('вытеснило', 1),
  pluralPast: Word('вытеснили', 1),
  imperativeInformal: Word('вытесни', 1),
  imperativeFormal: Word('вытесните', 1),
  imperfect: [],
};

perfectVerbs.set(вытеснить.name.text, вытеснить);

export { вытеснить };