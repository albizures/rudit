import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджариться: PerfectVerb = {
  name: Word('поджариться', 4),
  singular1stPerson: Word('поджарюсь', 4),
  singular2ndPerson: Word('поджаришься', 4),
  singular3rdPerson: Word('поджарится', 4),
  plural1stPerson: Word('поджаримся', 4),
  plural2ndPerson: Word('поджаритесь', 4),
  plural3rdPerson: Word('поджарятся', 4),
  masculinePast: Word('поджарился', 4),
  femininePast: Word('поджарилась', 4),
  neuterPast: Word('поджарилось', 4),
  pluralPast: Word('поджарились', 4),
  imperativeInformal: Word('поджарься', 4),
  imperativeFormal: Word('поджарьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поджариться.name.text, поджариться);

export { поджариться };