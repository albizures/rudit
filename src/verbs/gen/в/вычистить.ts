import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычистить: PerfectVerb = {
  name: Word('вычистить', 1),
  singular1stPerson: Word('вычищу', 1),
  singular2ndPerson: Word('вычистишь', 1),
  singular3rdPerson: Word('вычистит', 1),
  plural1stPerson: Word('вычистим', 1),
  plural2ndPerson: Word('вычистите', 1),
  plural3rdPerson: Word('вычистят', 1),
  masculinePast: Word('вычистил', 1),
  femininePast: Word('вычистила', 1),
  neuterPast: Word('вычистило', 1),
  pluralPast: Word('вычистили', 1),
  imperativeInformal: Word('вычисти', 1),
  imperativeFormal: Word('вычистите', 1),
  imperfect: [],
};

perfectVerbs.set(вычистить.name.text, вычистить);

export { вычистить };