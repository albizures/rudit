import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впиться: PerfectVerb = {
  name: Word('впиться', 2),
  singular1stPerson: Word('вопьюсь', 4),
  singular2ndPerson: Word('вопьёшься', 4),
  singular3rdPerson: Word('вопьётся', 4),
  plural1stPerson: Word('вопьёмся', 4),
  plural2ndPerson: Word('вопьётесь', 4),
  plural3rdPerson: Word('вопьются', 4),
  masculinePast: Word('впился', 2),
  femininePast: Word('впилась', 4),
  neuterPast: Word('впилось//впило'сь', 2),
  pluralPast: Word('впились//впили'сь', 2),
  imperativeInformal: Word('впейся', 2),
  imperativeFormal: Word('впейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(впиться.name.text, впиться);

export { впиться };