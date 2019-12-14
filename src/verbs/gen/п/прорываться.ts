import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорываться: PerfectVerb = {
  name: Word('прорываться', 6),
  singular1stPerson: Word('прорываюсь', 6),
  singular2ndPerson: Word('прорываешься', 6),
  singular3rdPerson: Word('прорывается', 6),
  plural1stPerson: Word('прорываемся', 6),
  plural2ndPerson: Word('прорываетесь', 6),
  plural3rdPerson: Word('прорываются', 6),
  masculinePast: Word('прорывался', 6),
  femininePast: Word('прорывалась', 6),
  neuterPast: Word('прорывалось', 6),
  pluralPast: Word('прорывались', 6),
  imperativeInformal: Word('прорывайся', 6),
  imperativeFormal: Word('прорывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прорываться.name.text, прорываться);

export { прорываться };