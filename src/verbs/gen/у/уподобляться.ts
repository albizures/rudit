import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уподобляться: PerfectVerb = {
  name: Word('уподобляться', 7),
  singular1stPerson: Word('уподобляюсь', 7),
  singular2ndPerson: Word('уподобляешься', 7),
  singular3rdPerson: Word('уподобляется', 7),
  plural1stPerson: Word('уподобляемся', 7),
  plural2ndPerson: Word('уподобляетесь', 7),
  plural3rdPerson: Word('уподобляются', 7),
  masculinePast: Word('уподоблялся', 7),
  femininePast: Word('уподоблялась', 7),
  neuterPast: Word('уподоблялось', 7),
  pluralPast: Word('уподоблялись', 7),
  imperativeInformal: Word('уподобляйся', 7),
  imperativeFormal: Word('уподобляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(уподобляться.name.text, уподобляться);

export { уподобляться };