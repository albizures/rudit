import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорисовываться: PerfectVerb = {
  name: Word('прорисовываться', 6),
  singular1stPerson: Word('прорисовываюсь', 6),
  singular2ndPerson: Word('прорисовываешься', 6),
  singular3rdPerson: Word('прорисовывается', 6),
  plural1stPerson: Word('прорисовываемся', 6),
  plural2ndPerson: Word('прорисовываетесь', 6),
  plural3rdPerson: Word('прорисовываются', 6),
  masculinePast: Word('прорисовывался', 6),
  femininePast: Word('прорисовывалась', 6),
  neuterPast: Word('прорисовывалось', 6),
  pluralPast: Word('прорисовывались', 6),
  imperativeInformal: Word('прорисовывайся', 6),
  imperativeFormal: Word('прорисовывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прорисовываться.name.text, прорисовываться);

export { прорисовываться };