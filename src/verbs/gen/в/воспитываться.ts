import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспитываться: PerfectVerb = {
  name: Word('воспитываться', 4),
  singular1stPerson: Word('воспитываюсь', 4),
  singular2ndPerson: Word('воспитываешься', 4),
  singular3rdPerson: Word('воспитывается', 4),
  plural1stPerson: Word('воспитываемся', 4),
  plural2ndPerson: Word('воспитываетесь', 4),
  plural3rdPerson: Word('воспитываются', 4),
  masculinePast: Word('воспитывался', 4),
  femininePast: Word('воспитывалась', 4),
  neuterPast: Word('воспитывалось', 4),
  pluralPast: Word('воспитывались', 4),
  imperativeInformal: Word('воспитывайся', 4),
  imperativeFormal: Word('воспитывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(воспитываться.name.text, воспитываться);

export { воспитываться };