import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрываться: PerfectVerb = {
  name: Word('подрываться', 6),
  singular1stPerson: Word('подрываюсь', 6),
  singular2ndPerson: Word('подрываешься', 6),
  singular3rdPerson: Word('подрывается', 6),
  plural1stPerson: Word('подрываемся', 6),
  plural2ndPerson: Word('подрываетесь', 6),
  plural3rdPerson: Word('подрываются', 6),
  masculinePast: Word('подрывался', 6),
  femininePast: Word('подрывалась', 6),
  neuterPast: Word('подрывалось', 6),
  pluralPast: Word('подрывались', 6),
  imperativeInformal: Word('подрывайся', 6),
  imperativeFormal: Word('подрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подрываться.name.text, подрываться);

export { подрываться };