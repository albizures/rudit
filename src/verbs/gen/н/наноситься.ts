import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наноситься: PerfectVerb = {
  name: Word('наноситься', 5),
  singular1stPerson: Word('наношусь', 5),
  singular2ndPerson: Word('наносишься', 3),
  singular3rdPerson: Word('наносится', 3),
  plural1stPerson: Word('наносимся', 3),
  plural2ndPerson: Word('наноситесь', 3),
  plural3rdPerson: Word('наносятся', 3),
  masculinePast: Word('наносился', 5),
  femininePast: Word('наносилась', 5),
  neuterPast: Word('наносилось', 5),
  pluralPast: Word('наносились', 5),
  imperativeInformal: Word('наносись', 5),
  imperativeFormal: Word('наноситесь', 5),
  imperfect: [],
};

perfectVerbs.set(наноситься.name.text, наноситься);

export { наноситься };