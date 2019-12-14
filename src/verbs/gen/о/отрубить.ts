import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрубить: PerfectVerb = {
  name: Word('отрубить', 5),
  singular1stPerson: Word('отрублю', 6),
  singular2ndPerson: Word('отрубишь', 3),
  singular3rdPerson: Word('отрубит', 3),
  plural1stPerson: Word('отрубим', 3),
  plural2ndPerson: Word('отрубите', 3),
  plural3rdPerson: Word('отрубят', 3),
  masculinePast: Word('отрубил', 5),
  femininePast: Word('отрубила', 5),
  neuterPast: Word('отрубило', 5),
  pluralPast: Word('отрубили', 5),
  imperativeInformal: Word('отруби', 5),
  imperativeFormal: Word('отрубите', 5),
  imperfect: [],
};

perfectVerbs.set(отрубить.name.text, отрубить);

export { отрубить };