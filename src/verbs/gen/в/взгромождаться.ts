import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взгромождаться: PerfectVerb = {
  name: Word('взгромождаться', 9),
  singular1stPerson: Word('взгромождаюсь', 9),
  singular2ndPerson: Word('взгромождаешься', 9),
  singular3rdPerson: Word('взгромождается', 9),
  plural1stPerson: Word('взгромождаемся', 9),
  plural2ndPerson: Word('взгромождаетесь', 9),
  plural3rdPerson: Word('взгромождаются', 9),
  masculinePast: Word('взгромождался', 9),
  femininePast: Word('взгромождалась', 9),
  neuterPast: Word('взгромождалось', 9),
  pluralPast: Word('взгромождались', 9),
  imperativeInformal: Word('взгромождайся', 9),
  imperativeFormal: Word('взгромождайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(взгромождаться.name.text, взгромождаться);

export { взгромождаться };