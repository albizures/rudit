import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перессорить: PerfectVerb = {
  name: Word('перессорить', 6),
  singular1stPerson: Word('перессорю', 6),
  singular2ndPerson: Word('перессоришь', 6),
  singular3rdPerson: Word('перессорит', 6),
  plural1stPerson: Word('перессорим', 6),
  plural2ndPerson: Word('перессорите', 6),
  plural3rdPerson: Word('перессорят', 6),
  masculinePast: Word('перессорил', 6),
  femininePast: Word('перессорила', 6),
  neuterPast: Word('перессорило', 6),
  pluralPast: Word('перессорили', 6),
  imperativeInformal: Word('перессорь', 6),
  imperativeFormal: Word('перессорьте', 6),
  imperfect: [],
};

perfectVerbs.set(перессорить.name.text, перессорить);

export { перессорить };