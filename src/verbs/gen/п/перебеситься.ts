import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебеситься: PerfectVerb = {
  name: Word('перебеситься', 7),
  singular1stPerson: Word('перебешусь', 7),
  singular2ndPerson: Word('перебесишься', 5),
  singular3rdPerson: Word('перебесится', 5),
  plural1stPerson: Word('перебесимся', 5),
  plural2ndPerson: Word('перебеситесь', 5),
  plural3rdPerson: Word('перебесятся', 5),
  masculinePast: Word('перебесился', 7),
  femininePast: Word('перебесилась', 7),
  neuterPast: Word('перебесилось', 7),
  pluralPast: Word('перебесились', 7),
  imperativeInformal: Word('перебесись', 7),
  imperativeFormal: Word('перебеситесь', 7),
  imperfect: [],
};

perfectVerbs.set(перебеситься.name.text, перебеситься);

export { перебеситься };