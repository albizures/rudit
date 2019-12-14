import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const списываться: PerfectVerb = {
  name: Word('списываться', 2),
  singular1stPerson: Word('списываюсь', 2),
  singular2ndPerson: Word('списываешься', 2),
  singular3rdPerson: Word('списывается', 2),
  plural1stPerson: Word('списываемся', 2),
  plural2ndPerson: Word('списываетесь', 2),
  plural3rdPerson: Word('списываются', 2),
  masculinePast: Word('списывался', 2),
  femininePast: Word('списывалась', 2),
  neuterPast: Word('списывалось', 2),
  pluralPast: Word('списывались', 2),
  imperativeInformal: Word('списывайся', 2),
  imperativeFormal: Word('списывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(списываться.name.text, списываться);

export { списываться };