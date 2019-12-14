import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поженить: PerfectVerb = {
  name: Word('поженить', 5),
  singular1stPerson: Word('поженю', 5),
  singular2ndPerson: Word('поженишь', 3),
  singular3rdPerson: Word('поженит', 3),
  plural1stPerson: Word('поженим', 3),
  plural2ndPerson: Word('пожените', 3),
  plural3rdPerson: Word('поженят', 3),
  masculinePast: Word('поженил', 5),
  femininePast: Word('поженила', 5),
  neuterPast: Word('поженило', 5),
  pluralPast: Word('поженили', 5),
  imperativeInformal: Word('пожени', 5),
  imperativeFormal: Word('пожените', 5),
  imperfect: ['женить'],
};

perfectVerbs.set(поженить.name.text, поженить);

export { поженить };