import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассеяться: PerfectVerb = {
  name: Word('рассеяться', 4),
  singular1stPerson: Word('рассеюсь', 4),
  singular2ndPerson: Word('рассеешься', 4),
  singular3rdPerson: Word('рассеется', 4),
  plural1stPerson: Word('рассеемся', 4),
  plural2ndPerson: Word('рассеетесь', 4),
  plural3rdPerson: Word('рассеются', 4),
  masculinePast: Word('рассеялся', 4),
  femininePast: Word('рассеялась', 4),
  neuterPast: Word('рассеялось', 4),
  pluralPast: Word('рассеялись', 4),
  imperativeInformal: Word('рассейся', 4),
  imperativeFormal: Word('рассейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассеяться.name.text, рассеяться);

export { рассеяться };