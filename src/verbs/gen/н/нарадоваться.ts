import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарадоваться: PerfectVerb = {
  name: Word('нарадоваться', 3),
  singular1stPerson: Word('нарадуюсь', 3),
  singular2ndPerson: Word('нарадуешься', 3),
  singular3rdPerson: Word('нарадуется', 3),
  plural1stPerson: Word('нарадуемся', 3),
  plural2ndPerson: Word('нарадуетесь', 3),
  plural3rdPerson: Word('нарадуются', 3),
  masculinePast: Word('нарадовался', 3),
  femininePast: Word('нарадовалась', 3),
  neuterPast: Word('нарадовалось', 3),
  pluralPast: Word('нарадовались', 3),
  imperativeInformal: Word('нарадуйся', 3),
  imperativeFormal: Word('нарадуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нарадоваться.name.text, нарадоваться);

export { нарадоваться };