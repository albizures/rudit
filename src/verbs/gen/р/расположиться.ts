import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расположиться: PerfectVerb = {
  name: Word('расположиться', 8),
  singular1stPerson: Word('расположусь', 8),
  singular2ndPerson: Word('расположишься', 6),
  singular3rdPerson: Word('расположится', 6),
  plural1stPerson: Word('расположимся', 6),
  plural2ndPerson: Word('расположитесь', 6),
  plural3rdPerson: Word('расположатся', 6),
  masculinePast: Word('расположился', 8),
  femininePast: Word('расположилась', 8),
  neuterPast: Word('расположилось', 8),
  pluralPast: Word('расположились', 8),
  imperativeInformal: Word('расположись', 8),
  imperativeFormal: Word('расположитесь', 8),
  imperfect: [],
};

perfectVerbs.set(расположиться.name.text, расположиться);

export { расположиться };