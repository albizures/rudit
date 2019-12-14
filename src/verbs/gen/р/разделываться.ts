import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделываться: PerfectVerb = {
  name: Word('разделываться', 4),
  singular1stPerson: Word('разделываюсь', 4),
  singular2ndPerson: Word('разделываешься', 4),
  singular3rdPerson: Word('разделывается', 4),
  plural1stPerson: Word('разделываемся', 4),
  plural2ndPerson: Word('разделываетесь', 4),
  plural3rdPerson: Word('разделываются', 4),
  masculinePast: Word('разделывался', 4),
  femininePast: Word('разделывалась', 4),
  neuterPast: Word('разделывалось', 4),
  pluralPast: Word('разделывались', 4),
  imperativeInformal: Word('разделывайся', 4),
  imperativeFormal: Word('разделывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разделываться.name.text, разделываться);

export { разделываться };