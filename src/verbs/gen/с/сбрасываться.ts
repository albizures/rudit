import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбрасываться: PerfectVerb = {
  name: Word('сбрасываться', 3),
  singular1stPerson: Word('сбрасываюсь', 3),
  singular2ndPerson: Word('сбрасываешься', 3),
  singular3rdPerson: Word('сбрасывается', 3),
  plural1stPerson: Word('сбрасываемся', 3),
  plural2ndPerson: Word('сбрасываетесь', 3),
  plural3rdPerson: Word('сбрасываются', 3),
  masculinePast: Word('сбрасывался', 3),
  femininePast: Word('сбрасывалась', 3),
  neuterPast: Word('сбрасывалось', 3),
  pluralPast: Word('сбрасывались', 3),
  imperativeInformal: Word('сбрасывайся', 3),
  imperativeFormal: Word('сбрасывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сбрасываться.name.text, сбрасываться);

export { сбрасываться };