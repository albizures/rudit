import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засмотреться: PerfectVerb = {
  name: Word('засмотреться', 7),
  singular1stPerson: Word('засмотрюсь', 7),
  singular2ndPerson: Word('засмотришься', 4),
  singular3rdPerson: Word('засмотрится', 4),
  plural1stPerson: Word('засмотримся', 4),
  plural2ndPerson: Word('засмотритесь', 4),
  plural3rdPerson: Word('засмотрятся', 4),
  masculinePast: Word('засмотрелся', 7),
  femininePast: Word('засмотрелась', 7),
  neuterPast: Word('засмотрелось', 7),
  pluralPast: Word('засмотрелись', 7),
  imperativeInformal: Word('засмотрись', 7),
  imperativeFormal: Word('засмотритесь', 7),
  imperfect: [],
};

perfectVerbs.set(засмотреться.name.text, засмотреться);

export { засмотреться };