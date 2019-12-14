import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благоволить: PerfectVerb = {
  name: Word('благоволить', 8),
  singular1stPerson: Word('благоволю', 8),
  singular2ndPerson: Word('благоволишь', 8),
  singular3rdPerson: Word('благоволит', 8),
  plural1stPerson: Word('благоволим', 8),
  plural2ndPerson: Word('благоволите', 8),
  plural3rdPerson: Word('благоволят', 8),
  masculinePast: Word('благоволил', 8),
  femininePast: Word('благоволила', 8),
  neuterPast: Word('благоволило', 8),
  pluralPast: Word('благоволили', 8),
  imperativeInformal: Word('благоволи', 8),
  imperativeFormal: Word('благоволите', 8),
  imperfect: [],
};

perfectVerbs.set(благоволить.name.text, благоволить);

export { благоволить };