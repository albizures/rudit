import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заматываться: PerfectVerb = {
  name: Word('заматываться', 3),
  singular1stPerson: Word('заматываюсь', 3),
  singular2ndPerson: Word('заматываешься', 3),
  singular3rdPerson: Word('заматывается', 3),
  plural1stPerson: Word('заматываемся', 3),
  plural2ndPerson: Word('заматываетесь', 3),
  plural3rdPerson: Word('заматываются', 3),
  masculinePast: Word('заматывался', 3),
  femininePast: Word('заматывалась', 3),
  neuterPast: Word('заматывалось', 3),
  pluralPast: Word('заматывались', 3),
  imperativeInformal: Word('заматывайся', 3),
  imperativeFormal: Word('заматывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(заматываться.name.text, заматываться);

export { заматываться };