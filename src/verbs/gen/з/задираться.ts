import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задираться: PerfectVerb = {
  name: Word('задираться', 5),
  singular1stPerson: Word('задираюсь', 5),
  singular2ndPerson: Word('задираешься', 5),
  singular3rdPerson: Word('задирается', 5),
  plural1stPerson: Word('задираемся', 5),
  plural2ndPerson: Word('задираетесь', 5),
  plural3rdPerson: Word('задираются', 5),
  masculinePast: Word('задирался', 5),
  femininePast: Word('задиралась', 5),
  neuterPast: Word('задиралось', 5),
  pluralPast: Word('задирались', 5),
  imperativeInformal: Word('задирайся', 5),
  imperativeFormal: Word('задирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(задираться.name.text, задираться);

export { задираться };