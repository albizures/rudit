import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмываться: PerfectVerb = {
  name: Word('подмываться', 6),
  singular1stPerson: Word('подмываюсь', 6),
  singular2ndPerson: Word('подмываешься', 6),
  singular3rdPerson: Word('подмывается', 6),
  plural1stPerson: Word('подмываемся', 6),
  plural2ndPerson: Word('подмываетесь', 6),
  plural3rdPerson: Word('подмываются', 6),
  masculinePast: Word('подмывался', 6),
  femininePast: Word('подмывалась', 6),
  neuterPast: Word('подмывалось', 6),
  pluralPast: Word('подмывались', 6),
  imperativeInformal: Word('подмывайся', 6),
  imperativeFormal: Word('подмывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подмываться.name.text, подмываться);

export { подмываться };