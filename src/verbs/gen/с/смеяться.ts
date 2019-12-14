import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смеяться: PerfectVerb = {
  name: Word('смеяться', 3),
  singular1stPerson: Word('смюсь', 2),
  singular2ndPerson: Word('смеёшься', 3),
  singular3rdPerson: Word('смеётся', 3),
  plural1stPerson: Word('смеёмся', 3),
  plural2ndPerson: Word('смеётесь', 3),
  plural3rdPerson: Word('смеются', 3),
  masculinePast: Word('смеялся', 3),
  femininePast: Word('смеялась', 3),
  neuterPast: Word('смеялось', 3),
  pluralPast: Word('смеялись', 3),
  imperativeInformal: Word('смейся', 2),
  imperativeFormal: Word('смейтесь', 2),
  imperfect: ['засмеяться','посмеяться'],
};

perfectVerbs.set(смеяться.name.text, смеяться);

export { смеяться };