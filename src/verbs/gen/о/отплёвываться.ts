import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплёвываться: PerfectVerb = {
  name: Word('отплёвываться', 8),
  singular1stPerson: Word('отплёвываюсь', 8),
  singular2ndPerson: Word('отплёвываешься', 8),
  singular3rdPerson: Word('отплёвывается', 8),
  plural1stPerson: Word('отплёвываемся', 8),
  plural2ndPerson: Word('отплёвываетесь', 8),
  plural3rdPerson: Word('отплёвываются', 8),
  masculinePast: Word('отплёвывался', 8),
  femininePast: Word('отплёвывалась', 8),
  neuterPast: Word('отплёвывалось', 8),
  pluralPast: Word('отплёвывались', 8),
  imperativeInformal: Word('отплёвывайся', 8),
  imperativeFormal: Word('отплёвывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(отплёвываться.name.text, отплёвываться);

export { отплёвываться };