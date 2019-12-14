import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрадываться: PerfectVerb = {
  name: Word('подкрадываться', 5),
  singular1stPerson: Word('подкрадываюсь', 5),
  singular2ndPerson: Word('подкрадываешься', 5),
  singular3rdPerson: Word('подкрадывается', 5),
  plural1stPerson: Word('подкрадываемся', 5),
  plural2ndPerson: Word('подкрадываетесь', 5),
  plural3rdPerson: Word('подкрадываются', 5),
  masculinePast: Word('подкрадывался', 5),
  femininePast: Word('подкрадывалась', 5),
  neuterPast: Word('подкрадывалось', 5),
  pluralPast: Word('подкрадывались', 5),
  imperativeInformal: Word('подкрадывайся', 5),
  imperativeFormal: Word('подкрадывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подкрадываться.name.text, подкрадываться);

export { подкрадываться };