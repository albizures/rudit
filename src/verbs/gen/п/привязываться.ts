import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привязываться: PerfectVerb = {
  name: Word('привязываться', 4),
  singular1stPerson: Word('привязываюсь', 4),
  singular2ndPerson: Word('привязываешься', 4),
  singular3rdPerson: Word('привязывается', 4),
  plural1stPerson: Word('привязываемся', 4),
  plural2ndPerson: Word('привязываетесь', 4),
  plural3rdPerson: Word('привязываются', 4),
  masculinePast: Word('привязывался', 4),
  femininePast: Word('привязывалась', 4),
  neuterPast: Word('привязывалось', 4),
  pluralPast: Word('привязывались', 4),
  imperativeInformal: Word('привязывайся', 4),
  imperativeFormal: Word('привязывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(привязываться.name.text, привязываться);

export { привязываться };