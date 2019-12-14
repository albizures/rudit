import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провиниться: PerfectVerb = {
  name: Word('провиниться', 6),
  singular1stPerson: Word('провинюсь', 6),
  singular2ndPerson: Word('провинишься', 6),
  singular3rdPerson: Word('провинится', 6),
  plural1stPerson: Word('провинимся', 6),
  plural2ndPerson: Word('провинитесь', 6),
  plural3rdPerson: Word('провинятся', 6),
  masculinePast: Word('провинился', 6),
  femininePast: Word('провинилась', 6),
  neuterPast: Word('провинилось', 6),
  pluralPast: Word('провинились', 6),
  imperativeInformal: Word('провинись', 6),
  imperativeFormal: Word('провинитесь', 6),
  imperfect: [],
};

perfectVerbs.set(провиниться.name.text, провиниться);

export { провиниться };