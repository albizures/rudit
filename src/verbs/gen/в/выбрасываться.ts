import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбрасываться: PerfectVerb = {
  name: Word('выбрасываться', 4),
  singular1stPerson: Word('выбрасываюсь', 4),
  singular2ndPerson: Word('выбрасываешься', 4),
  singular3rdPerson: Word('выбрасывается', 4),
  plural1stPerson: Word('выбрасываемся', 4),
  plural2ndPerson: Word('выбрасываетесь', 4),
  plural3rdPerson: Word('выбрасываются', 4),
  masculinePast: Word('выбрасывался', 4),
  femininePast: Word('выбрасывалась', 4),
  neuterPast: Word('выбрасывалось', 4),
  pluralPast: Word('выбрасывались', 4),
  imperativeInformal: Word('выбрасывайся', 4),
  imperativeFormal: Word('выбрасывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(выбрасываться.name.text, выбрасываться);

export { выбрасываться };