import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпроситься: PerfectVerb = {
  name: Word('отпроситься', 6),
  singular1stPerson: Word('отпрошусь', 6),
  singular2ndPerson: Word('отпросишься', 4),
  singular3rdPerson: Word('отпросится', 4),
  plural1stPerson: Word('отпросимся', 4),
  plural2ndPerson: Word('отпроситесь', 4),
  plural3rdPerson: Word('отпросятся', 4),
  masculinePast: Word('отпросился', 6),
  femininePast: Word('отпросилась', 6),
  neuterPast: Word('отпросилось', 6),
  pluralPast: Word('отпросились', 6),
  imperativeInformal: Word('отпросись', 6),
  imperativeFormal: Word('отпроситесь', 6),
  imperfect: [],
};

perfectVerbs.set(отпроситься.name.text, отпроситься);

export { отпроситься };