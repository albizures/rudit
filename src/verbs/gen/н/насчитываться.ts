import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насчитываться: PerfectVerb = {
  name: Word('насчитываться', 4),
  singular1stPerson: Word('насчитываюсь', 4),
  singular2ndPerson: Word('насчитываешься', 4),
  singular3rdPerson: Word('насчитывается', 4),
  plural1stPerson: Word('насчитываемся', 4),
  plural2ndPerson: Word('насчитываетесь', 4),
  plural3rdPerson: Word('насчитываются', 4),
  masculinePast: Word('насчитывался', 4),
  femininePast: Word('насчитывалась', 4),
  neuterPast: Word('насчитывалось', 4),
  pluralPast: Word('насчитывались', 4),
  imperativeInformal: Word('насчитывайся', 4),
  imperativeFormal: Word('насчитывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(насчитываться.name.text, насчитываться);

export { насчитываться };