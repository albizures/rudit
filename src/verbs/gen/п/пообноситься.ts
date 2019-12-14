import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пообноситься: PerfectVerb = {
  name: Word('пообноситься', 7),
  singular1stPerson: Word('пообношусь', 7),
  singular2ndPerson: Word('пообносишься', 5),
  singular3rdPerson: Word('пообносится', 5),
  plural1stPerson: Word('пообносимся', 5),
  plural2ndPerson: Word('пообноситесь', 5),
  plural3rdPerson: Word('пообносятся', 5),
  masculinePast: Word('пообносился', 7),
  femininePast: Word('пообносилась', 7),
  neuterPast: Word('пообносилось', 7),
  pluralPast: Word('пообносились', 7),
  imperativeInformal: Word('пообносись', 7),
  imperativeFormal: Word('пообноситесь', 7),
  imperfect: [],
};

perfectVerbs.set(пообноситься.name.text, пообноситься);

export { пообноситься };