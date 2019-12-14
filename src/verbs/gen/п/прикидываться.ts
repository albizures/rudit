import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикидываться: PerfectVerb = {
  name: Word('прикидываться', 4),
  singular1stPerson: Word('прикидываюсь', 4),
  singular2ndPerson: Word('прикидываешься', 4),
  singular3rdPerson: Word('прикидывается', 4),
  plural1stPerson: Word('прикидываемся', 4),
  plural2ndPerson: Word('прикидываетесь', 4),
  plural3rdPerson: Word('прикидываются', 4),
  masculinePast: Word('прикидывался', 4),
  femininePast: Word('прикидывалась', 4),
  neuterPast: Word('прикидывалось', 4),
  pluralPast: Word('прикидывались', 4),
  imperativeInformal: Word('прикидывайся', 4),
  imperativeFormal: Word('прикидывайтесь', 4),
  imperfect: ['прикинуться'],
};

perfectVerbs.set(прикидываться.name.text, прикидываться);

export { прикидываться };