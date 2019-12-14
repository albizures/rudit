import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приобщаться: PerfectVerb = {
  name: Word('приобщаться', 6),
  singular1stPerson: Word('приобщаюсь', 6),
  singular2ndPerson: Word('приобщаешься', 6),
  singular3rdPerson: Word('приобщается', 6),
  plural1stPerson: Word('приобщаемся', 6),
  plural2ndPerson: Word('приобщаетесь', 6),
  plural3rdPerson: Word('приобщаются', 6),
  masculinePast: Word('приобщался', 6),
  femininePast: Word('приобщалась', 6),
  neuterPast: Word('приобщалось', 6),
  pluralPast: Word('приобщались', 6),
  imperativeInformal: Word('приобщайся', 6),
  imperativeFormal: Word('приобщайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(приобщаться.name.text, приобщаться);

export { приобщаться };