import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распластываться: PerfectVerb = {
  name: Word('распластываться', 5),
  singular1stPerson: Word('распластываюсь', 5),
  singular2ndPerson: Word('распластываешься', 5),
  singular3rdPerson: Word('распластывается', 5),
  plural1stPerson: Word('распластываемся', 5),
  plural2ndPerson: Word('распластываетесь', 5),
  plural3rdPerson: Word('распластываются', 5),
  masculinePast: Word('распластывался', 5),
  femininePast: Word('распластывалась', 5),
  neuterPast: Word('распластывалось', 5),
  pluralPast: Word('распластывались', 5),
  imperativeInformal: Word('распластывайся', 5),
  imperativeFormal: Word('распластывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(распластываться.name.text, распластываться);

export { распластываться };