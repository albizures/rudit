import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надеяться: PerfectVerb = {
  name: Word('надеяться', 3),
  singular1stPerson: Word('надеюсь', 3),
  singular2ndPerson: Word('надеешься', 3),
  singular3rdPerson: Word('надеется', 3),
  plural1stPerson: Word('надеемся', 3),
  plural2ndPerson: Word('надеетесь', 3),
  plural3rdPerson: Word('надеются', 3),
  masculinePast: Word('надеялся', 3),
  femininePast: Word('надеялась', 3),
  neuterPast: Word('надеялось', 3),
  pluralPast: Word('надеялись', 3),
  imperativeInformal: Word('надейся', 3),
  imperativeFormal: Word('надейтесь', 3),
  imperfect: ['понадеяться'],
};

perfectVerbs.set(надеяться.name.text, надеяться);

export { надеяться };