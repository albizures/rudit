import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подделываться: PerfectVerb = {
  name: Word('подделываться', 4),
  singular1stPerson: Word('подделываюсь', 4),
  singular2ndPerson: Word('подделываешься', 4),
  singular3rdPerson: Word('подделывается', 4),
  plural1stPerson: Word('подделываемся', 4),
  plural2ndPerson: Word('подделываетесь', 4),
  plural3rdPerson: Word('подделываются', 4),
  masculinePast: Word('подделывался', 4),
  femininePast: Word('подделывалась', 4),
  neuterPast: Word('подделывалось', 4),
  pluralPast: Word('подделывались', 4),
  imperativeInformal: Word('подделывайся', 4),
  imperativeFormal: Word('подделывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подделываться.name.text, подделываться);

export { подделываться };