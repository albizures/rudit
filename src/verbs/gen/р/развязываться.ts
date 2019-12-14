import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развязываться: PerfectVerb = {
  name: Word('развязываться', 4),
  singular1stPerson: Word('развязываюсь', 4),
  singular2ndPerson: Word('развязываешься', 4),
  singular3rdPerson: Word('развязывается', 4),
  plural1stPerson: Word('развязываемся', 4),
  plural2ndPerson: Word('развязываетесь', 4),
  plural3rdPerson: Word('развязываются', 4),
  masculinePast: Word('развязывался', 4),
  femininePast: Word('развязывалась', 4),
  neuterPast: Word('развязывалось', 4),
  pluralPast: Word('развязывались', 4),
  imperativeInformal: Word('развязывайся', 4),
  imperativeFormal: Word('развязывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(развязываться.name.text, развязываться);

export { развязываться };