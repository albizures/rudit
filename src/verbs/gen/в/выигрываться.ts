import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выигрываться: PerfectVerb = {
  name: Word('выигрываться', 2),
  singular1stPerson: Word('выигрываюсь', 2),
  singular2ndPerson: Word('выигрываешься', 2),
  singular3rdPerson: Word('выигрывается', 2),
  plural1stPerson: Word('выигрываемся', 2),
  plural2ndPerson: Word('выигрываетесь', 2),
  plural3rdPerson: Word('выигрываются', 2),
  masculinePast: Word('выигрывался', 2),
  femininePast: Word('выигрывалась', 2),
  neuterPast: Word('выигрывалось', 2),
  pluralPast: Word('выигрывались', 2),
  imperativeInformal: Word('выигрывайся', 2),
  imperativeFormal: Word('выигрывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(выигрываться.name.text, выигрываться);

export { выигрываться };