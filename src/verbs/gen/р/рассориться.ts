import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассориться: PerfectVerb = {
  name: Word('рассориться', 4),
  singular1stPerson: Word('рассорюсь', 4),
  singular2ndPerson: Word('рассоришься', 4),
  singular3rdPerson: Word('рассорится', 4),
  plural1stPerson: Word('рассоримся', 4),
  plural2ndPerson: Word('рассоритесь', 4),
  plural3rdPerson: Word('рассорятся', 4),
  masculinePast: Word('рассорился', 4),
  femininePast: Word('рассорилась', 4),
  neuterPast: Word('рассорилось', 4),
  pluralPast: Word('рассорились', 4),
  imperativeInformal: Word('рассорься', 4),
  imperativeFormal: Word('рассорьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассориться.name.text, рассориться);

export { рассориться };