import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побаловаться: PerfectVerb = {
  name: Word('побаловаться', 7),
  singular1stPerson: Word('побалуюсь', 5),
  singular2ndPerson: Word('побалуешься', 5),
  singular3rdPerson: Word('побалуется', 5),
  plural1stPerson: Word('побалуемся', 5),
  plural2ndPerson: Word('побалуетесь', 5),
  plural3rdPerson: Word('побалуются', 5),
  masculinePast: Word('побаловался', 7),
  femininePast: Word('побаловалась', 7),
  neuterPast: Word('побаловалось', 7),
  pluralPast: Word('побаловались', 7),
  imperativeInformal: Word('побалуйся', 5),
  imperativeFormal: Word('побалуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(побаловаться.name.text, побаловаться);

export { побаловаться };