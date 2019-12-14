import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const биться: PerfectVerb = {
  name: Word('биться', 1),
  singular1stPerson: Word('бьюсь', 2),
  singular2ndPerson: Word('бьёшься', 2),
  singular3rdPerson: Word('бьётся', 2),
  plural1stPerson: Word('бьёмся', 2),
  plural2ndPerson: Word('бьётесь', 2),
  plural3rdPerson: Word('бьются', 2),
  masculinePast: Word('бился', 1),
  femininePast: Word('билась', 1),
  neuterPast: Word('билось', 1),
  pluralPast: Word('бились', 1),
  imperativeInformal: Word('бейся', 1),
  imperativeFormal: Word('бейтесь', 1),
  imperfect: [],
};

perfectVerbs.set(биться.name.text, биться);

export { биться };