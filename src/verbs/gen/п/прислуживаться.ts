import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислуживаться: PerfectVerb = {
  name: Word('прислуживаться', 5),
  singular1stPerson: Word('прислуживаюсь', 5),
  singular2ndPerson: Word('прислуживаешься', 5),
  singular3rdPerson: Word('прислуживается', 5),
  plural1stPerson: Word('прислуживаемся', 5),
  plural2ndPerson: Word('прислуживаетесь', 5),
  plural3rdPerson: Word('прислуживаются', 5),
  masculinePast: Word('прислуживался', 5),
  femininePast: Word('прислуживалась', 5),
  neuterPast: Word('прислуживалось', 5),
  pluralPast: Word('прислуживались', 5),
  imperativeInformal: Word('прислуживайся', 5),
  imperativeFormal: Word('прислуживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прислуживаться.name.text, прислуживаться);

export { прислуживаться };