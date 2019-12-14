import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарубить: PerfectVerb = {
  name: Word('нарубить', 5),
  singular1stPerson: Word('нарублю', 6),
  singular2ndPerson: Word('нарубишь', 3),
  singular3rdPerson: Word('нарубит', 3),
  plural1stPerson: Word('нарубим', 3),
  plural2ndPerson: Word('нарубите', 3),
  plural3rdPerson: Word('нарубят', 3),
  masculinePast: Word('нарубил', 5),
  femininePast: Word('нарубила', 5),
  neuterPast: Word('нарубило', 5),
  pluralPast: Word('нарубили', 5),
  imperativeInformal: Word('наруби', 5),
  imperativeFormal: Word('нарубите', 5),
  imperfect: [],
};

perfectVerbs.set(нарубить.name.text, нарубить);

export { нарубить };