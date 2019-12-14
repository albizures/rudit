import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запениться: PerfectVerb = {
  name: Word('запениться', 3),
  singular1stPerson: Word('запенюсь', 3),
  singular2ndPerson: Word('запенишься', 3),
  singular3rdPerson: Word('запенится', 3),
  plural1stPerson: Word('запенимся', 3),
  plural2ndPerson: Word('запенитесь', 3),
  plural3rdPerson: Word('запенятся', 3),
  masculinePast: Word('запенился', 3),
  femininePast: Word('запенилась', 3),
  neuterPast: Word('запенилось', 3),
  pluralPast: Word('запенились', 3),
  imperativeInformal: Word('запенься', 3),
  imperativeFormal: Word('запеньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(запениться.name.text, запениться);

export { запениться };