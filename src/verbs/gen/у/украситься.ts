import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const украситься: PerfectVerb = {
  name: Word('украситься', 3),
  singular1stPerson: Word('украшусь', 3),
  singular2ndPerson: Word('украсишься', 3),
  singular3rdPerson: Word('украсится', 3),
  plural1stPerson: Word('украсимся', 3),
  plural2ndPerson: Word('украситесь', 3),
  plural3rdPerson: Word('украсятся', 3),
  masculinePast: Word('украсился', 3),
  femininePast: Word('украсилась', 3),
  neuterPast: Word('украсилось', 3),
  pluralPast: Word('украсились', 3),
  imperativeInformal: Word('украсься', 3),
  imperativeFormal: Word('украсьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(украситься.name.text, украситься);

export { украситься };