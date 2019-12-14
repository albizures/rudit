import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсчитываться: PerfectVerb = {
  name: Word('обсчитываться', 4),
  singular1stPerson: Word('обсчитываюсь', 4),
  singular2ndPerson: Word('обсчитываешься', 4),
  singular3rdPerson: Word('обсчитывается', 4),
  plural1stPerson: Word('обсчитываемся', 4),
  plural2ndPerson: Word('обсчитываетесь', 4),
  plural3rdPerson: Word('обсчитываются', 4),
  masculinePast: Word('обсчитывался', 4),
  femininePast: Word('обсчитывалась', 4),
  neuterPast: Word('обсчитывалось', 4),
  pluralPast: Word('обсчитывались', 4),
  imperativeInformal: Word('обсчитывайся', 4),
  imperativeFormal: Word('обсчитывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(обсчитываться.name.text, обсчитываться);

export { обсчитываться };