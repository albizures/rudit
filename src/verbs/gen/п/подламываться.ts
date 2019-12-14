import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подламываться: PerfectVerb = {
  name: Word('подламываться', 4),
  singular1stPerson: Word('подламываюсь', 4),
  singular2ndPerson: Word('подламываешься', 4),
  singular3rdPerson: Word('подламывается', 4),
  plural1stPerson: Word('подламываемся', 4),
  plural2ndPerson: Word('подламываетесь', 4),
  plural3rdPerson: Word('подламываются', 4),
  masculinePast: Word('подламывался', 4),
  femininePast: Word('подламывалась', 4),
  neuterPast: Word('подламывалось', 4),
  pluralPast: Word('подламывались', 4),
  imperativeInformal: Word('подламывайся', 4),
  imperativeFormal: Word('подламывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подламываться.name.text, подламываться);

export { подламываться };