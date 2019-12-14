import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спроситься: PerfectVerb = {
  name: Word('спроситься', 5),
  singular1stPerson: Word('спрошусь', 5),
  singular2ndPerson: Word('спросишься', 3),
  singular3rdPerson: Word('спросится', 3),
  plural1stPerson: Word('спросимся', 3),
  plural2ndPerson: Word('спроситесь', 3),
  plural3rdPerson: Word('спросятся', 3),
  masculinePast: Word('спросился', 5),
  femininePast: Word('спросилась', 5),
  neuterPast: Word('спросилось', 5),
  pluralPast: Word('спросились', 5),
  imperativeInformal: Word('спросись', 5),
  imperativeFormal: Word('спроситесь', 5),
  imperfect: [],
};

perfectVerbs.set(спроситься.name.text, спроситься);

export { спроситься };