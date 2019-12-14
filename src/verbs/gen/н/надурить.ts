import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надурить: PerfectVerb = {
  name: Word('надурить', 5),
  singular1stPerson: Word('надурю', 5),
  singular2ndPerson: Word('надуришь', 5),
  singular3rdPerson: Word('надурит', 5),
  plural1stPerson: Word('надурим', 5),
  plural2ndPerson: Word('надурите', 5),
  plural3rdPerson: Word('надурят', 5),
  masculinePast: Word('надурил', 5),
  femininePast: Word('надурила', 5),
  neuterPast: Word('надурило', 5),
  pluralPast: Word('надурили', 5),
  imperativeInformal: Word('надури', 5),
  imperativeFormal: Word('надурите', 5),
  imperfect: [],
};

perfectVerbs.set(надурить.name.text, надурить);

export { надурить };