import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассмеяться: PerfectVerb = {
  name: Word('рассмеяться', 6),
  singular1stPerson: Word('рассмеюсь', 6),
  singular2ndPerson: Word('рассмеёшься', 1),
  singular3rdPerson: Word('рассмеётся', 1),
  plural1stPerson: Word('рассмеёмся', 1),
  plural2ndPerson: Word('рассмеётесь', 1),
  plural3rdPerson: Word('рассмеются', 6),
  masculinePast: Word('рассмеялся', 6),
  femininePast: Word('рассмеялась', 6),
  neuterPast: Word('рассмеялось', 6),
  pluralPast: Word('рассмеялись', 6),
  imperativeInformal: Word('рассмейся', 5),
  imperativeFormal: Word('рассмейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(рассмеяться.name.text, рассмеяться);

export { рассмеяться };