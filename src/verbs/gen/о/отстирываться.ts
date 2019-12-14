import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстирываться: PerfectVerb = {
  name: Word('отстирываться', 4),
  singular1stPerson: Word('отстирываюсь', 4),
  singular2ndPerson: Word('отстирываешься', 4),
  singular3rdPerson: Word('отстирывается', 4),
  plural1stPerson: Word('отстирываемся', 4),
  plural2ndPerson: Word('отстирываетесь', 4),
  plural3rdPerson: Word('отстирываются', 4),
  masculinePast: Word('отстирывался', 4),
  femininePast: Word('отстирывалась', 4),
  neuterPast: Word('отстирывалось', 4),
  pluralPast: Word('отстирывались', 4),
  imperativeInformal: Word('отстирывайся', 4),
  imperativeFormal: Word('отстирывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отстирываться.name.text, отстирываться);

export { отстирываться };