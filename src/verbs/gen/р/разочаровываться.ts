import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разочаровываться: PerfectVerb = {
  name: Word('разочаровываться', 7),
  singular1stPerson: Word('разочаровываюсь', 7),
  singular2ndPerson: Word('разочаровываешься', 7),
  singular3rdPerson: Word('разочаровывается', 7),
  plural1stPerson: Word('разочаровываемся', 7),
  plural2ndPerson: Word('разочаровываетесь', 7),
  plural3rdPerson: Word('разочаровываются', 7),
  masculinePast: Word('разочаровывался', 7),
  femininePast: Word('разочаровывалась', 7),
  neuterPast: Word('разочаровывалось', 7),
  pluralPast: Word('разочаровывались', 7),
  imperativeInformal: Word('разочаровывайся', 7),
  imperativeFormal: Word('разочаровывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разочаровываться.name.text, разочаровываться);

export { разочаровываться };