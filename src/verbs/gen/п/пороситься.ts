import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пороситься: PerfectVerb = {
  name: Word('пороситься', 5),
  singular1stPerson: Word('порошусь', 5),
  singular2ndPerson: Word('поросишься', 5),
  singular3rdPerson: Word('поросится', 5),
  plural1stPerson: Word('поросимся', 5),
  plural2ndPerson: Word('пороситесь', 5),
  plural3rdPerson: Word('поросятся', 5),
  masculinePast: Word('поросился', 5),
  femininePast: Word('поросилась', 5),
  neuterPast: Word('поросилось', 5),
  pluralPast: Word('поросились', 5),
  imperativeInformal: Word('поросись', 5),
  imperativeFormal: Word('пороситесь', 5),
  imperfect: [],
};

perfectVerbs.set(пороситься.name.text, пороситься);

export { пороситься };