import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умориться: PerfectVerb = {
  name: Word('умориться', 4),
  singular1stPerson: Word('уморюсь', 4),
  singular2ndPerson: Word('уморишься', 4),
  singular3rdPerson: Word('уморится', 4),
  plural1stPerson: Word('уморимся', 4),
  plural2ndPerson: Word('уморитесь', 4),
  plural3rdPerson: Word('уморятся', 4),
  masculinePast: Word('уморился', 4),
  femininePast: Word('уморилась', 4),
  neuterPast: Word('уморилось', 4),
  pluralPast: Word('уморились', 4),
  imperativeInformal: Word('уморись', 4),
  imperativeFormal: Word('уморитесь', 4),
  imperfect: [],
};

perfectVerbs.set(умориться.name.text, умориться);

export { умориться };