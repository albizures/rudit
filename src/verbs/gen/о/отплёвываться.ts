import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплёвываться: PerfectVerb = {
  name: Word('отплёвываться', 4),
  singular1stPerson: Word('отплёвываюсь', 4),
  singular2ndPerson: Word('отплёвываешься', 4),
  singular3rdPerson: Word('отплёвывается', 4),
  plural1stPerson: Word('отплёвываемся', 4),
  plural2ndPerson: Word('отплёвываетесь', 4),
  plural3rdPerson: Word('отплёвываются', 4),
  masculinePast: Word('отплёвывался', 4),
  femininePast: Word('отплёвывалась', 4),
  neuterPast: Word('отплёвывалось', 4),
  pluralPast: Word('отплёвывались', 4),
  imperativeInformal: Word('отплёвывайся', 4),
  imperativeFormal: Word('отплёвывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отплёвываться.name.text, отплёвываться);

export { отплёвываться };