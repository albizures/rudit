import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскурить: PerfectVerb = {
  name: Word('раскурить', 6),
  singular1stPerson: Word('раскурю', 6),
  singular2ndPerson: Word('раскуришь', 4),
  singular3rdPerson: Word('раскурит', 4),
  plural1stPerson: Word('раскурим', 4),
  plural2ndPerson: Word('раскурите', 4),
  plural3rdPerson: Word('раскурят', 4),
  masculinePast: Word('раскурил', 6),
  femininePast: Word('раскурила', 6),
  neuterPast: Word('раскурило', 6),
  pluralPast: Word('раскурили', 6),
  imperativeInformal: Word('раскури', 6),
  imperativeFormal: Word('раскурите', 6),
  imperfect: [],
};

perfectVerbs.set(раскурить.name.text, раскурить);

export { раскурить };