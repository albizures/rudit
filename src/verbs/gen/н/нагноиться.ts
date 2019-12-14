import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагноиться: PerfectVerb = {
  name: Word('нагноиться', 5),
  singular1stPerson: Word('нагноюсь', 5),
  singular2ndPerson: Word('нагноишься', 5),
  singular3rdPerson: Word('нагноится', 5),
  plural1stPerson: Word('нагноимся', 5),
  plural2ndPerson: Word('нагноитесь', 5),
  plural3rdPerson: Word('нагноятся', 5),
  masculinePast: Word('нагноился', 5),
  femininePast: Word('нагноилась', 5),
  neuterPast: Word('нагноилось', 5),
  pluralPast: Word('нагноились', 5),
  imperativeInformal: Word('нагноись', 5),
  imperativeFormal: Word('нагноитесь', 5),
  imperfect: [],
};

perfectVerbs.set(нагноиться.name.text, нагноиться);

export { нагноиться };