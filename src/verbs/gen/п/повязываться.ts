import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повязываться: PerfectVerb = {
  name: Word('повязываться', 3),
  singular1stPerson: Word('повязываюсь', 3),
  singular2ndPerson: Word('повязываешься', 3),
  singular3rdPerson: Word('повязывается', 3),
  plural1stPerson: Word('повязываемся', 3),
  plural2ndPerson: Word('повязываетесь', 3),
  plural3rdPerson: Word('повязываются', 3),
  masculinePast: Word('повязывался', 3),
  femininePast: Word('повязывалась', 3),
  neuterPast: Word('повязывалось', 3),
  pluralPast: Word('повязывались', 3),
  imperativeInformal: Word('повязывайся', 3),
  imperativeFormal: Word('повязывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(повязываться.name.text, повязываться);

export { повязываться };