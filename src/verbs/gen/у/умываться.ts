import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умываться: PerfectVerb = {
  name: Word('умываться', 4),
  singular1stPerson: Word('умываюсь', 4),
  singular2ndPerson: Word('умываешься', 4),
  singular3rdPerson: Word('умывается', 4),
  plural1stPerson: Word('умываемся', 4),
  plural2ndPerson: Word('умываетесь', 4),
  plural3rdPerson: Word('умываются', 4),
  masculinePast: Word('умывался', 4),
  femininePast: Word('умывалась', 4),
  neuterPast: Word('умывалось', 4),
  pluralPast: Word('умывались', 4),
  imperativeInformal: Word('умывайся', 4),
  imperativeFormal: Word('умывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(умываться.name.text, умываться);

export { умываться };