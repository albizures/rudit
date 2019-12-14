import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сматываться: PerfectVerb = {
  name: Word('сматываться', 2),
  singular1stPerson: Word('сматываюсь', 2),
  singular2ndPerson: Word('сматываешься', 2),
  singular3rdPerson: Word('сматывается', 2),
  plural1stPerson: Word('сматываемся', 2),
  plural2ndPerson: Word('сматываетесь', 2),
  plural3rdPerson: Word('сматываются', 2),
  masculinePast: Word('сматывался', 2),
  femininePast: Word('сматывалась', 2),
  neuterPast: Word('сматывалось', 2),
  pluralPast: Word('сматывались', 2),
  imperativeInformal: Word('сматывайся', 2),
  imperativeFormal: Word('сматывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сматываться.name.text, сматываться);

export { сматываться };