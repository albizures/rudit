import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмущаться: PerfectVerb = {
  name: Word('возмущаться', 6),
  singular1stPerson: Word('возмущаюсь', 6),
  singular2ndPerson: Word('возмущаешься', 6),
  singular3rdPerson: Word('возмущается', 6),
  plural1stPerson: Word('возмущаемся', 6),
  plural2ndPerson: Word('возмущаетесь', 6),
  plural3rdPerson: Word('возмущаются', 6),
  masculinePast: Word('возмущался', 6),
  femininePast: Word('возмущалась', 6),
  neuterPast: Word('возмущалось', 6),
  pluralPast: Word('возмущались', 6),
  imperativeInformal: Word('возмущайся', 6),
  imperativeFormal: Word('возмущайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(возмущаться.name.text, возмущаться);

export { возмущаться };