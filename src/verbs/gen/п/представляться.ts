import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const представляться: PerfectVerb = {
  name: Word('представляться', 9),
  singular1stPerson: Word('представляюсь', 9),
  singular2ndPerson: Word('представляешься', 9),
  singular3rdPerson: Word('представляется', 9),
  plural1stPerson: Word('представляемся', 9),
  plural2ndPerson: Word('представляетесь', 9),
  plural3rdPerson: Word('представляются', 9),
  masculinePast: Word('представлялся', 9),
  femininePast: Word('представлялась', 9),
  neuterPast: Word('представлялось', 9),
  pluralPast: Word('представлялись', 9),
  imperativeInformal: Word('представляйся', 9),
  imperativeFormal: Word('представляйтесь', 9),
  imperfect: ['представиться'],
};

perfectVerbs.set(представляться.name.text, представляться);

export { представляться };