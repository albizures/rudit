import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const связываться: PerfectVerb = {
  name: Word('связываться', 2),
  singular1stPerson: Word('связываюсь', 2),
  singular2ndPerson: Word('связываешься', 2),
  singular3rdPerson: Word('связывается', 2),
  plural1stPerson: Word('связываемся', 2),
  plural2ndPerson: Word('связываетесь', 2),
  plural3rdPerson: Word('связываются', 2),
  masculinePast: Word('связывался', 2),
  femininePast: Word('связывалась', 2),
  neuterPast: Word('связывалось', 2),
  pluralPast: Word('связывались', 2),
  imperativeInformal: Word('связывайся', 2),
  imperativeFormal: Word('связывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(связываться.name.text, связываться);

export { связываться };