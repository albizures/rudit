import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присасываться: PerfectVerb = {
  name: Word('присасываться', 4),
  singular1stPerson: Word('присасываюсь', 4),
  singular2ndPerson: Word('присасываешься', 4),
  singular3rdPerson: Word('присасывается', 4),
  plural1stPerson: Word('присасываемся', 4),
  plural2ndPerson: Word('присасываетесь', 4),
  plural3rdPerson: Word('присасываются', 4),
  masculinePast: Word('присасывался', 4),
  femininePast: Word('присасывалась', 4),
  neuterPast: Word('присасывалось', 4),
  pluralPast: Word('присасывались', 4),
  imperativeInformal: Word('присасывайся', 4),
  imperativeFormal: Word('присасывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(присасываться.name.text, присасываться);

export { присасываться };