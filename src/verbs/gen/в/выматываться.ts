import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выматываться: PerfectVerb = {
  name: Word('выматываться', 3),
  singular1stPerson: Word('выматываюсь', 3),
  singular2ndPerson: Word('выматываешься', 3),
  singular3rdPerson: Word('выматывается', 3),
  plural1stPerson: Word('выматываемся', 3),
  plural2ndPerson: Word('выматываетесь', 3),
  plural3rdPerson: Word('выматываются', 3),
  masculinePast: Word('выматывался', 3),
  femininePast: Word('выматывалась', 3),
  neuterPast: Word('выматывалось', 3),
  pluralPast: Word('выматывались', 3),
  imperativeInformal: Word('выматывайся', 3),
  imperativeFormal: Word('выматывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выматываться.name.text, выматываться);

export { выматываться };