import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попроситься: PerfectVerb = {
  name: Word('попроситься', 6),
  singular1stPerson: Word('попрошусь', 6),
  singular2ndPerson: Word('попросишься', 4),
  singular3rdPerson: Word('попросится', 4),
  plural1stPerson: Word('попросимся', 4),
  plural2ndPerson: Word('попроситесь', 4),
  plural3rdPerson: Word('попросятся', 4),
  masculinePast: Word('попросился', 6),
  femininePast: Word('попросилась', 6),
  neuterPast: Word('попросилось', 6),
  pluralPast: Word('попросились', 6),
  imperativeInformal: Word('попросись', 6),
  imperativeFormal: Word('попроситесь', 6),
  imperfect: [],
};

perfectVerbs.set(попроситься.name.text, попроситься);

export { попроситься };