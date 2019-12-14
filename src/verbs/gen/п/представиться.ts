import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const представиться: PerfectVerb = {
  name: Word('представиться', 6),
  singular1stPerson: Word('представлюсь', 6),
  singular2ndPerson: Word('представишься', 6),
  singular3rdPerson: Word('представится', 6),
  plural1stPerson: Word('представимся', 6),
  plural2ndPerson: Word('представитесь', 6),
  plural3rdPerson: Word('представятся', 6),
  masculinePast: Word('представился', 6),
  femininePast: Word('представилась', 6),
  neuterPast: Word('представилось', 6),
  pluralPast: Word('представились', 6),
  imperativeInformal: Word('представься', 6),
  imperativeFormal: Word('представьтесь', 6),
  imperfect: ['представляться'],
};

perfectVerbs.set(представиться.name.text, представиться);

export { представиться };