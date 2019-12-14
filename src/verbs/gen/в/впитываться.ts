import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впитываться: PerfectVerb = {
  name: Word('впитываться', 2),
  singular1stPerson: Word('впитываюсь', 2),
  singular2ndPerson: Word('впитываешься', 2),
  singular3rdPerson: Word('впитывается', 2),
  plural1stPerson: Word('впитываемся', 2),
  plural2ndPerson: Word('впитываетесь', 2),
  plural3rdPerson: Word('впитываются', 2),
  masculinePast: Word('впитывался', 2),
  femininePast: Word('впитывалась', 2),
  neuterPast: Word('впитывалось', 2),
  pluralPast: Word('впитывались', 2),
  imperativeInformal: Word('впитывайся', 2),
  imperativeFormal: Word('впитывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(впитываться.name.text, впитываться);

export { впитываться };