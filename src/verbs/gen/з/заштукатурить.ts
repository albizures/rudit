import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заштукатурить: PerfectVerb = {
  name: Word('заштукатурить', 8),
  singular1stPerson: Word('заштукатурю', 8),
  singular2ndPerson: Word('заштукатуришь', 8),
  singular3rdPerson: Word('заштукатурит', 8),
  plural1stPerson: Word('заштукатурим', 8),
  plural2ndPerson: Word('заштукатурите', 8),
  plural3rdPerson: Word('заштукатурят', 8),
  masculinePast: Word('заштукатурил', 8),
  femininePast: Word('заштукатурила', 8),
  neuterPast: Word('заштукатурило', 8),
  pluralPast: Word('заштукатурили', 8),
  imperativeInformal: Word('заштукатурь', 8),
  imperativeFormal: Word('заштукатурьте', 8),
  imperfect: [],
};

perfectVerbs.set(заштукатурить.name.text, заштукатурить);

export { заштукатурить };