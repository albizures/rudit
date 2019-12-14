import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравновесить: PerfectVerb = {
  name: Word('уравновесить', 7),
  singular1stPerson: Word('уравновешу', 7),
  singular2ndPerson: Word('уравновесишь', 7),
  singular3rdPerson: Word('уравновесит', 7),
  plural1stPerson: Word('уравновесим', 7),
  plural2ndPerson: Word('уравновесите', 7),
  plural3rdPerson: Word('уравновесят', 7),
  masculinePast: Word('уравновесил', 7),
  femininePast: Word('уравновесила', 7),
  neuterPast: Word('уравновесило', 7),
  pluralPast: Word('уравновесили', 7),
  imperativeInformal: Word('уравновесь', 7),
  imperativeFormal: Word('уравновесьте', 7),
  imperfect: [],
};

perfectVerbs.set(уравновесить.name.text, уравновесить);

export { уравновесить };