import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокурить: PerfectVerb = {
  name: Word('прокурить', 6),
  singular1stPerson: Word('прокурю', 6),
  singular2ndPerson: Word('прокуришь', 4),
  singular3rdPerson: Word('прокурит', 4),
  plural1stPerson: Word('прокурим', 4),
  plural2ndPerson: Word('прокурите', 4),
  plural3rdPerson: Word('прокурят', 4),
  masculinePast: Word('прокурил', 6),
  femininePast: Word('прокурила', 6),
  neuterPast: Word('прокурило', 6),
  pluralPast: Word('прокурили', 6),
  imperativeInformal: Word('прокури', 6),
  imperativeFormal: Word('прокурите', 6),
  imperfect: [],
};

perfectVerbs.set(прокурить.name.text, прокурить);

export { прокурить };